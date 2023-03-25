import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { IndirizziRubricaSchema, IndirizziRubrica } from '../../database/models';

import { TokenModule } from '../../token/token.module';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';


@Module({

  providers: [ AuthService ],

  imports: [
    MongooseModule.forFeature([
      { name: IndirizziRubrica.collection.name, schema: IndirizziRubricaSchema }
    ]),

    TokenModule
  ],

  controllers: [ AuthController ]

})
export class AuthModule {
}
