import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { AuthModule } from './auth/auth.module';
import { FmModule } from './fm/fm.module';
import { SystemModule } from './system/system.module';
import { DataAccessorModule } from './data-accessor/data-accessor.module';


@Module({

  imports: [
    DatabaseModule,
    AuthModule,
    SystemModule,
    FmModule,
    DataAccessorModule
  ]

})
export class ApiModule {
}
