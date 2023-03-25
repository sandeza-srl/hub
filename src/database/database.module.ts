import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TokenModule } from '../token/token.module';

import { DatabaseConfigurationService } from './database.configuration';
import { DatabaseService } from './database.service';


@Module({
  imports  : [
    MongooseModule.forRootAsync({
      useClass: DatabaseConfigurationService,
      imports : [ TokenModule ]
    })
  ],
  providers: [ DatabaseService ]
})
export class DatabaseModule {
}
