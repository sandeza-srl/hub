import * as mongoose from 'mongoose';

import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { InjectConnection } from '@nestjs/mongoose';

import { AdminGuard } from '../auth/guards/AdminGuard';

import { DatabaseService } from '../../database/database.service';


@ApiTags('System')
@Controller('system')
export class SystemController {

  constructor(
    @InjectConnection()
    private readonly model: mongoose.Connection,
    private readonly databaseService: DatabaseService
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
  public insert(
    @Param('collection') collection: string
  ) {
    /** Mongoose Model usable to add/find/update documents */
    const Model = this.databaseService.getModelForCollection(collection);

    /** Write something wonderful down here */
  }

}
