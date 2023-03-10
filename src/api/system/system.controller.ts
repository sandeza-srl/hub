import { Controller, Get } from '@nestjs/common';


@Controller('system')
export class SystemController {

  @Get('ping')
  public pong(): string {
    return 'pong';
  }

}
