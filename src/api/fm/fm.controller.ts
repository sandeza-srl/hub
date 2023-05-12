import { Body, Controller, Post, Query, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from '../auth/guards/AccessTokenGuard';
import { ManageRecordDto } from './dto/insertRecordDto';
import { FmService } from './fm.service';


@ApiTags('FileMaker')
@Controller('fm')
export class FmController {

  constructor(private readonly fmService: FmService) {
  }


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
}
