import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DatabaseConfigurationService } from './database.configuration';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseConfigurationService
    })
  ]
})
export class DatabaseModule {
}
