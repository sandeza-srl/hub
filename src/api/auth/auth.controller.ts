import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

import { UserLoginDto } from './dto/UserLoginDto';


@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) {
  }


  @Post('login')
  public async login(
    @Body() loginDto: UserLoginDto
  ) {
    const userData = await this.authService.verifyLoginAsync(loginDto);
    return this.authService.createAuthData(userData);
  }

}
