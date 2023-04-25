import { Module } from '@nestjs/common';

import { JwtModule, JwtService } from '@nestjs/jwt';

import { AccessTokenService } from './services/access-token.service';
import { RefreshTokenService } from './services/refresh-token.service';


@Module({

  imports: [ JwtModule ],

  providers: [ AccessTokenService, RefreshTokenService, JwtService ],

  exports: [ AccessTokenService, RefreshTokenService, JwtService ]

})
export class TokenModule {
}
