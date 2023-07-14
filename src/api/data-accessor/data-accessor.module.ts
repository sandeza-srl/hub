import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';

import { DatabaseModule } from '../../database/database.module';
import { RouteModelProvider } from '../../database/database.providers';

import { SystemModule } from '../system/system.module';
import { SystemService } from '../system/system.service';

import { DataAccessorController } from './data-accessor.controller';


/* --------
 * Module Definition
 * -------- */
@Module({
  controllers: [ DataAccessorController ],
  providers  : [
    SystemService,
    RouteModelProvider
  ],
  imports    : [
    DatabaseModule,
    AuthModule,
    SystemModule
  ]
})
export class DataAccessorModule {
}
