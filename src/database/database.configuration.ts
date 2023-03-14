import * as mongoose from 'mongoose';

import { BadRequestException, Inject, Injectable, Scope } from '@nestjs/common';
import { Request } from 'express';

import { REQUEST } from '@nestjs/core';

import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';

import { hasValidAdminKey } from '../api/auth/utils';

import { MONGOOSE_DATABASE_QUERY_PARAM_SELECTOR } from './constants';
import { MONGOOSE_TO_OBJECT_DEFAULTS } from './database.options';


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
    private readonly request: Request
  ) {
  }


  public createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
    /** Initialize the db name container */
    let db: string | null = null;

    /** If the user is connecting as admin, get the db from the query params */
    if (hasValidAdminKey(this.request)) {
      db = (this.request.query[MONGOOSE_DATABASE_QUERY_PARAM_SELECTOR]?.toString()) ?? null;
    }

    /** TODO: If database connection is null, extract from AuthToken */

    /** Assert the right db has been selected */
    if (db == null) {
      throw new BadRequestException(
        'Could not find a valid database to connect for this request',
        'system/invalid-database'
      );
    }

    /** Return database connection options */
    return {
      uri       : `mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${db}`,
      authSource: process.env.DB_AUTH_SOURCE,
      auth      : {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD
      }
    };

  }

}
