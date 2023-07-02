import * as mongoose from 'mongoose';

import { AugmentedMap } from '@proedis/utils';

import { REQUEST } from '@nestjs/core';
import { BadRequestException, Module, Scope } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import type { Request } from 'express';
import { AccessTokenService } from '../token/services/access-token.service';
import { RefreshTokenService } from '../token/services/refresh-token.service';
import { DatabaseService } from './database.service';

import { MONGO_DB_CUSTOM_SELECTOR, MONGO_DB_SELECTOR } from './constants';
import { MONGOOSE_TO_OBJECT_DEFAULTS } from './database.options';

import { hasValidAdminKey } from '../api/auth/utils';


/* --------
 * Define default properties for Mongoose connection
 * -------- */
mongoose.set('debug', process.env.NODE_ENV === 'development');
mongoose.set('toJSON', MONGOOSE_TO_OBJECT_DEFAULTS);
mongoose.set('toObject', MONGOOSE_TO_OBJECT_DEFAULTS);
mongoose.set('id', false);
mongoose.set('strict', true);
mongoose.pluralize(null);


/* --------
 * Connections Pool
 * -------- */
const mongooseConnectionsPool = new AugmentedMap<string, mongoose.Connection>();


/* --------
 * Module Definition
 * -------- */
@Module({
  providers: [
    DatabaseService,
    {
      provide   : 'DATABASE_CONNECTION',
      scope     : Scope.REQUEST,
      inject    : [ REQUEST ],
      useFactory: (
        request: Request
      ): mongoose.Connection => {

        const mongooseModuleOptions: mongoose.ConnectOptions & { uri: string } = (() => {
          /** Initialize the db name container */
          const isAdmin = hasValidAdminKey(request);
          let db: string | null;


          /** If the user is connecting as admin, get the db from the query params */
          if (isAdmin) {
            db = (request.query[MONGO_DB_SELECTOR]?.toString()) ?? null;
          }
          /** For auth request, extract the db id from body */
          else if (request.url.match(/auth\/(login|refresh)/)) {
            db = request.body?.[MONGO_DB_SELECTOR] ?? request.query[MONGO_DB_SELECTOR];
          }
          /** Else, try to load the database from access token */
          else {
            throw new BadRequestException();
          }


          /** Assert the right db has been selected */
          if (db == null) {
            throw new BadRequestException(
              'Could not find a valid database to connect for this request',
              'system/invalid-database'
            );
          }

          /** Check if a custom db connection has been provided */
          const customDb = request.query[MONGO_DB_CUSTOM_SELECTOR]?.toString();

          /** Return defaults without customDb query param */
          if (customDb == null || !isAdmin) {
            return {
              uri            : `mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${db}`,
              authSource     : process.env.DB_AUTH_SOURCE,
              auth           : {
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD
              },
              maxPoolSize    : 25,
              socketTimeoutMS: 3000
            };
          }

          /** This is for custom request, extract custom DB from query params */
          switch (customDb) {
            case 'machieraldo':
              return {
                uri            : `mongodb://139.144.154.55:27017/${db}`,
                authSource     : 'users',
                auth           : {
                  username: 'sandeza-user',
                  password: 'm0ng0dbs4nd3z4'
                },
                maxPoolSize    : 25,
                socketTimeoutMS: 3000
              };

            default:
              throw new BadRequestException(
                'Could not find a valid database to connect for this request',
                'system/invalid-database'
              );
          }
        })();

        const { uri, ...connectOptions } = mongooseModuleOptions;

        return mongooseConnectionsPool.getOrAdd(uri, () => mongoose.createConnection(uri, connectOptions));
      }
    }
  ],
  exports  : [ 'DATABASE_CONNECTION' ]
})
export class DatabaseModule {
}
