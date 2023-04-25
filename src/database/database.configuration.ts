import * as mongoose from 'mongoose';

import { BadRequestException, Inject, Injectable, Scope } from '@nestjs/common';
import { Request } from 'express';

import { REQUEST } from '@nestjs/core';

import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';

import { hasValidAdminKey } from '../api/auth/utils';

import { MONGO_DB_CUSTOM_SELECTOR, MONGO_DB_SELECTOR } from './constants';
import { MONGOOSE_TO_OBJECT_DEFAULTS } from './database.options';

import { AccessTokenService } from '../token/services/access-token.service';
import { RefreshTokenService } from '../token/services/refresh-token.service';


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
 * Define the Configuration Class
 * -------- */
@Injectable({ scope: Scope.REQUEST })
export class DatabaseConfigurationService implements MongooseOptionsFactory {

  constructor(
    @Inject(REQUEST)
    private readonly request: Request,
    private readonly accessTokenService: AccessTokenService,
    private readonly refreshTokenService: RefreshTokenService
  ) {
  }


  public createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
    /** Initialize the db name container */
    const isAdmin = hasValidAdminKey(this.request);
    let db: string | null;


    /** If the user is connecting as admin, get the db from the query params */
    if (isAdmin) {
      db = (this.request.query[MONGO_DB_SELECTOR]?.toString()) ?? null;
    }
    /** For auth request, extract the db id from body */
    else if (this.request.url.match(/auth\/(login|refresh)/)) {
      db = this.request.body?.[MONGO_DB_SELECTOR] ?? this.request.query[MONGO_DB_SELECTOR];
    }
    /** Else, try to load the database from access token */
    else {
      db = this.accessTokenService.getMongoDatabaseName(this.request)
        ?? this.refreshTokenService.getMongoDatabaseName(this.request);
    }


    /** Assert the right db has been selected */
    if (db == null) {
      throw new BadRequestException(
        'Could not find a valid database to connect for this request',
        'system/invalid-database'
      );
    }

    /** Check if a custom db connection has been provided */
    const customDb = this.request.query[MONGO_DB_CUSTOM_SELECTOR]?.toString();

    /** Return defaults without customDb query param */
    if (customDb == null || !isAdmin) {
      return {
        uri       : `mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${db}`,
        authSource: process.env.DB_AUTH_SOURCE,
        auth      : {
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD
        }
      };
    }

    /** This is for custom request, extract custom DB from query params */
    switch (customDb) {
      case 'machieraldo':
        return {
          uri       : `mongodb://139.144.154.55:27017/${db}`,
          authSource: 'users',
          auth      : {
            username: 'sandeza-user',
            password: 'm0ng0dbs4nd3z4'
          }
        };

      default:
        throw new BadRequestException(
          'Could not find a valid database to connect for this request',
          'system/invalid-database'
        );
    }

  }

}
