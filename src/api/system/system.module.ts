import { Connection } from 'mongoose';
import * as mongoose from 'mongoose';

import { AugmentedMap } from '@proedis/utils';

import { BadRequestException, Module } from '@nestjs/common';
import { Request } from 'express';

import { REQUEST } from '@nestjs/core';

import { DatabaseModule } from '../../database/database.module';
import { AuthModule } from '../auth/auth.module';

import { SystemController } from './system.controller';
import { SystemService } from './system.service';

import * as databaseModels from '../../database/models';


/* --------
 * Models Pool
 * -------- */
const connectionModelsPool = new AugmentedMap<mongoose.Connection, AugmentedMap<string, mongoose.Model<any>>>();


/* --------
 * Module Definition
 * -------- */
@Module({
  controllers: [ SystemController ],
  providers  : [
    SystemService,
    {
      provide   : 'RouteModel',
      inject    : [ 'DATABASE_CONNECTION', REQUEST ],
      useFactory: (connection: Connection, request: Request) => {
        /** Check params collection has been defined */
        if (!('collection' in request.params) || !request.params.collection) {
          return undefined;
        }

        /** Get the Models Pool using current connection */
        const modelsPool = connectionModelsPool.getOrAdd(
          connection,
          () => new AugmentedMap<string, mongoose.Model<any>>()
        );

        /** Get the models using collection param */
        return modelsPool.getOrAdd(request.params.collection, () => {

          const Model = (databaseModels as any)[request.params.collection] as mongoose.Model<any>;
          const Schema = (databaseModels as any)[`${request.params.collection}Schema`] as mongoose.Schema;

          if (Schema && Model && Model.prototype instanceof mongoose.Model) {
            Schema.set('collection', Model.collection.name);
            return connection.model(Model.collection.name, Schema, request.params.collection);
          }

          throw new BadRequestException(
            `Could not find a valid Model for requested collection ${request.params.collection}`,
            'system/invalid-collection'
          );
        });
      }
    }
  ],
  imports    : [
    DatabaseModule,
    AuthModule
  ]
})
export class SystemModule {
}
