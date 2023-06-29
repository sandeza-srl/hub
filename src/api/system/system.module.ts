import * as mongoose from 'mongoose';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Request } from 'express';

import { REQUEST } from '@nestjs/core';

import { DatabaseService } from '../../database/database.service';
import { AuthModule } from '../auth/auth.module';

import { SystemController } from './system.controller';
import { SystemService } from './system.service';

import * as databaseModels from '../../database/models';


@Module({
  controllers: [ SystemController ],
  providers  : [ DatabaseService, SystemService ],
  imports    : [
    MongooseModule.forFeatureAsync([
      {
        name      : 'RouteModel',
        inject    : [ REQUEST ],
        useFactory: (request: Request) => {
          /** Check params collection has been defined */
          if ('collection' in request.params && request.params.collection) {
            const Model = (databaseModels as any)[request.params.collection] as mongoose.Model<any>;
            const Schema = (databaseModels as any)[`${request.params.collection}Schema`] as mongoose.Schema;

            if (Schema && Model && Model.prototype instanceof mongoose.Model) {
              Schema.set('collection', Model.collection.name);
              return Schema;
            }
          }

          return undefined;
        }
      }
    ]),
    AuthModule
  ]
})
export class SystemModule {
}
