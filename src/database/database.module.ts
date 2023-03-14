import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DatabaseConfigurationService } from './database.configuration';
import { DatabaseService } from './database.service';


@Module({
  imports  : [
    MongooseModule.forRootAsync({
      useClass: DatabaseConfigurationService
    })
  ],
  providers: [ DatabaseService ]
})
export class DatabaseModule {
}
