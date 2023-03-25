import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module';


@Module({

  imports: [
    DatabaseModule,

    AuthModule,
    SystemModule
  ]

})
export class ApiModule {
}
