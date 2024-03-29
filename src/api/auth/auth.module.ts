import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';

import { AccessTokenGuard } from './guards';

import { DatabaseModule } from '../../database/database.module';
import { IndirizziRubricaSchema, IndirizziRubrica } from '../../database/models';

import { TokenModule } from '../../token/token.module';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { AccessTokenService } from '../../token/services/access-token.service';

import { DATABASE_CONNECTION } from '../../database/database.providers';


@Module({

  providers: [
    AuthService,
    AccessTokenGuard,
    AccessTokenService,
    {
      provide   : IndirizziRubrica.collection.name,
      inject    : [ DATABASE_CONNECTION ],
      useFactory: (connection: Connection) => connection.model(IndirizziRubrica.collection.name, IndirizziRubricaSchema)
    }
  ],

  imports: [
    DatabaseModule,
    TokenModule
  ],

  controllers: [ AuthController ],

  exports: [ AuthService, AccessTokenGuard, AccessTokenService ]

})
export class AuthModule {
}
