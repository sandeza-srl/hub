import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { AuthModule } from '../auth/auth.module';

import { SystemController } from './system.controller';
import { SystemService } from './system.service';

import { RouteModelProvider } from '../../database/database.providers';


/* --------
 * Module Definition
 * -------- */
@Module({
  controllers: [ SystemController ],
  providers  : [
    SystemService,
    RouteModelProvider
  ],
  imports    : [
    DatabaseModule,
    AuthModule
  ]
})
export class SystemModule {
}
