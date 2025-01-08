import * as mongoose from 'mongoose';

import { REQUEST } from '@nestjs/core';

import { BadRequestException, Scope } from '@nestjs/common';
import type { FactoryProvider } from '@nestjs/common';

import { AugmentedMap } from '@proedis/utils';

import { Request } from 'express';

import { getModelFromPool } from './utils';

import { AccessTokenService } from '../token/services/access-token.service';
import { RefreshTokenService } from '../token/services/refresh-token.service';

import { hasValidAdminKey } from '../api/auth/utils';

import { MONGO_DB_CUSTOM_SELECTOR, MONGO_DB_SELECTOR } from './constants';


/* --------
 * Providers Name
 * -------- */
export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const ROUTE_MODEL = 'RouteModel';


/* --------
 * Provider to load the Mongoose Connection based on Client Request
 * -------- */
const mongooseConnectionsPool = new AugmentedMap<string, mongoose.Connection>();

export const DatabaseConnectionProvider: FactoryProvider = {
  provide   : DATABASE_CONNECTION,
  scope     : Scope.REQUEST,
  inject    : [ REQUEST, AccessTokenService, RefreshTokenService ],
  useFactory: (
    request: Request,
    accessTokenService: AccessTokenService,
    refreshTokenService: RefreshTokenService
  ): mongoose.Connection => {

    const mongooseModuleOptions: mongoose.ConnectOptions & { uri: string } = (() => {
      /** Initialize the db name container */
      let db: string | null;

      /** Check if the current request has been made with the AdminKey header */
      const isAdmin = hasValidAdminKey(request);


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
        db = accessTokenService.getMongoDatabaseName(request) ?? refreshTokenService.getMongoDatabaseName(request);
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

        case 'gmf':
          return {
            uri            : `mongodb://139.162.156.104:27017/${db}`,
            authSource     : 'admin',
            auth           : {
              username: 'sandeza',
              password: 'S4nd3z4!'
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
};


/* --------
 * Provider to easy inject RouteModel from Database Models Pool
 * -------- */
export const RouteModelProvider: FactoryProvider = {
  provide   : ROUTE_MODEL,
  inject    : [ DATABASE_CONNECTION, REQUEST ],
  useFactory: (connection: mongoose.Connection, request: Request) => {
    /** Check if a params collection has been defined */
    if (!('collection' in request.params) || !request.params.collection) {
      return undefined;
    }

    return getModelFromPool(connection, request.params.collection);
  }
};
