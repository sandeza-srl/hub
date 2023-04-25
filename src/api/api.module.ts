import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { AuthModule } from './auth/auth.module';
import { FmModule } from './fm/fm.module';
import { SystemModule } from './system/system.module';


@Module({

  imports: [
    DatabaseModule,
    AuthModule,
    SystemModule,
    FmModule
  ]

})
export class ApiModule {
}
