import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from '../auth/guards/AccessTokenGuard';
import { ManageRecordDto } from './dto/insertRecordDto';
import { FmService } from './fm.service';


@ApiTags('FileMaker')
@Controller('fm')
export class FmController {

  constructor(private readonly fmService: FmService) {
  }


  @Get('insert/:host')
  @ApiOkResponse({ status: '2XX', description: 'Server is Alive' })
  public pong(): string {
    return 'pong';
  }


  @UseGuards(AccessTokenGuard)
  @Post('insert')
  @ApiCreatedResponse()
  public async insert(
    @Query('host') host: string,
    @Body() body: ManageRecordDto
  ) {

    /** Call standard Fm Request to insert record into DataHub */
    return this.fmService.insertRecord(host, body);

  }
}
