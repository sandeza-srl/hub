import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';

import { UserLoginDto } from './dto/UserLoginDto';

import { UserData } from './decorators';
import { AccessTokenGuard, RefreshTokenGuard } from './guards';
import { IUserData } from './interfaces/UserData';


@ApiTags('Authentication')
@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) {
  }


  /**
   * Endpoint for Login to generate Access and Refresh Token
   *
   * @param loginDto
   */

  @ApiCreatedResponse({ description: 'JSON Object with: accessToken, refreshToken and userData' })
  @ApiResponse({ description: 'Could not find a valid user with provided email', status: 401 })
  @Post('login')
  public async login(
    @Body() loginDto: UserLoginDto
  ) {
    const userData = await this.authService.verifyLoginAsync(loginDto);
    return this.authService.createAuthData(userData);
  }


  @UseGuards(AccessTokenGuard)
  @Get('me')
  public getUserData(
    @UserData() userData: IUserData
  ) {
    return userData;
  }


  @UseGuards(RefreshTokenGuard)
  @Get('grant')
  public grantAccessToken(
    @UserData() userData: IUserData
  ) {
    return this.authService.grantAccessToken(userData);
  }

}
