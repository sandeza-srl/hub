import { Body, Controller, Post, Query, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../auth/guards';
import { AccessTokenGuard } from '../auth/guards';
import { ManageRecordDto } from './dto/insertRecordDto';
import { FmService } from './fm.service';


@ApiTags('FileMaker')
@Controller('fm')
export class FmController {

  constructor(private readonly fmService: FmService) {
  }


  /**
   * Endpoint to make a request to FM Server
   * @param host -> FileMaker Server hosted domain
   * @param body
   */
  @UseGuards(AccessTokenGuard)
  @Post('insert')
  @ApiCreatedResponse()
  public async insert(
    @Query('host') host: string,
    @Body() body: ManageRecordDto[]
  ) {

    /** Call standard Fm Request to insert record into DataHub */
    return this.fmService.insertRecord(host, body);

  }


  /**
   * Inserts multiple records into DataHub using the provided host and body.
   * @UseGuards(AccessTokenGuard)
   * @Post('insert-multiple')
   * @ApiCreatedResponse()
   * @param {string} host - The host to insert records into.
   * @param {ManageRecordDto[]} body - The array of records to be inserted.
   * @return {Promise<void>} - A promise representing the completion of the insertion operation.
   */
  @UseGuards(AccessTokenGuard)
  @Post('insert-multiple')
  @ApiCreatedResponse()
  public async insertMultiple(
    @Query('host') host: string,
    @Body() body: ManageRecordDto[]
  ) {

    /** Call standard Fm Request to insert record into DataHub */
    return this.fmService.insertMultipleRecords(host, body);

  }


  @UseGuards(AdminGuard)
  @Post('execute-script')
  @ApiCreatedResponse()
  public async executeFmScript(
    @Query('host') host: string,
    @Query('database') database: string,
    @Query('layout') layout: string,
    @Query('script') script: string,
    @Body() body: any
  ) {

    return this.fmService.executeFmScript(host, database, layout, script, body);

  }

}
