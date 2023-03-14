import * as mongoose from 'mongoose';

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { InjectModel } from '@nestjs/mongoose';

import { AdminGuard } from '../auth/guards/AdminGuard';

import { DatabaseService } from '../../database/database.service';
import { SystemService } from './system.service';


@ApiTags('System')
@Controller('system')
export class SystemController {

  constructor(
    @InjectModel('RouteModel')
    private readonly routeModel: mongoose.Model<any>,
    private readonly databaseService: DatabaseService,
    private systemService: SystemService
  ) {
  }


  @Get('ping')
  @ApiOkResponse({ status: '2XX', description: 'Server is Alive' })
  public pong(): string {
    return 'pong';
  }


  @UseGuards(AdminGuard)
  @Post('insert/:collection/:id')
  @ApiCreatedResponse()
  public async insert(
    @Param('collection') collection: string,
    @Param('id') id: string,
    @Body() source: any
  ) {

    /** Write something wonderful down here */
    return this.systemService.upsertDocumentInCollection(this.routeModel, id, source);

  }

}
