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


  /**
   * Executes a FileMaker script.
   * @param {string} host - The host of the FileMaker server.
   * @param {string} database - The name of the FileMaker database.
   * @param {string} layout - The layout to be used for the script execution.
   * @param {string} script - The name of the script to be executed.
   * @param {any} body - The request body containing any necessary parameters for the script execution.
   * @returns {Promise<any>} - A promise that resolves with the result of the script execution.
   */
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


  /**
   * Inserts a parametrized record and runs a script.
   *
   * This method inserts a record into a specified layout in a given database on a specified host,
   * and then runs a script with the provided parameters.
   * The record data and script parameters are passed as a JSON object in the request body.
   *
   * @param {string} host - The host name or IP address of the server.
   * @param {string} database - The name of the database.
   * @param {string} layout - The layout name within the database to insert the record into.
   * @param {string} script - The name of the script to run.
   * @param {object} body - The JSON object containing the record data and script parameters.
   * @returns {Promise<any>} - A Promise that resolves to the result of the insert operation
   *                         and the result of the script execution.
   */
  @UseGuards(AdminGuard)
  @Post('insert-record-and-run-script')
  @ApiCreatedResponse()
  public async insertParametrizedRecord(
    @Query('host') host: string,
    @Query('database') database: string,
    @Query('layout') layout: string,
    @Query('script') script: string,
    @Body() body: any
  ): Promise<any> {

    return this.fmService.insertRecordAndRunScriptParametrized(host, database, layout, script, body);

  }

}
