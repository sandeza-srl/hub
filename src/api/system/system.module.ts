import { Module } from '@nestjs/common';

import { DatabaseService } from '../../database/database.service';

import { SystemController } from './system.controller';


@Module({
  controllers: [ SystemController ],
  providers  : [ DatabaseService ]
})
export class SystemModule {
}
