import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';

import { AdminGuard } from '../auth/guards';

import { SystemService } from './system.service';


@ApiTags('System')
@Controller('system')
export class SystemController {

  constructor(
    private systemService: SystemService
  ) {
  }


  @Get('ping')
  @ApiOkResponse({ status: '2XX', description: 'Server is Alive' })
  public pong(): string {
    return 'pong';
  }


  /**
   * Endpoint to insert or replace a record in mongoDB Database
   *
   * @returns the recordID
   *
   * @param collection @description 'Anagrafica'
   * @param id
   * @param source
   */
  @UseGuards(AdminGuard)
  @Post('insert/:collection/:id')
  @ApiBody({ description: 'JSON of the record' })
  @ApiOperation({ description: 'Endpoint to insert or replace a record in mongoDB Database' })
  @ApiCreatedResponse({ description: 'ID of the record created/updated' })
  @ApiResponse({ description: 'Could not find a valid database to connect for this request', status: 400 })
  public async insert(
    @Param('collection') collection: string,
    @Param('id') id: string,
    @Body() source: any
  ) {

    return this.systemService.upsertDocumentInCollection(id, source);

  }


  /**
   * <desc> Endpoint to delete a record in mongoDB Database
   * @param collection
   * @param id
   */
  @UseGuards(AdminGuard)
  @Delete('delete/:collection/:id')
  @ApiCreatedResponse({ description: 'ID of the record created/updated' })
  public async delete(
    @Param('collection') collection: string,
    @Param('id') id: string
  ) {

    return this.systemService.deleteDocumentInCollection(id);

  }
}
