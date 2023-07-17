import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { MongooseQueryParser } from 'mongoose-query-parser';

import { AccessTokenGuard } from '../auth/guards';

import { SystemService } from '../system/system.service';


const parser = new MongooseQueryParser();


@Controller(':collection')
export class DataAccessorController {


  constructor(
    private readonly systemService: SystemService
  ) {
  }


  @UseGuards(AccessTokenGuard)
  @Get()
  public async getRecords(
    @Query() query: string
  ) {
    return this.systemService.getDocuments(parser.parse(query));
  }

}
