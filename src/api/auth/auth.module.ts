import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccessTokenGuard } from './guards';

import { IndirizziRubricaSchema, IndirizziRubrica } from '../../database/models';

import { TokenModule } from '../../token/token.module';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { AccessTokenService } from '../../token/services/access-token.service';


@Module({

  providers: [ AuthService, AccessTokenGuard, AccessTokenService ],

  imports: [
    MongooseModule.forFeature([
      { name: IndirizziRubrica.collection.name, schema: IndirizziRubricaSchema }
    ]),

    TokenModule
  ],

  controllers: [ AuthController ],

  exports: [ AuthService, AccessTokenGuard, AccessTokenService ]

})
export class AuthModule {
}
