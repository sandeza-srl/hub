import { Module } from '@nestjs/common';
import { AdaptersModule } from '../../adapters/adapters.module';
import { FmController } from './fm.controller';
import { FmService } from './fm.service';

import { AuthModule } from '../auth/auth.module';


@Module({
  controllers: [ FmController ],
  providers  : [ FmService ],
  imports    : [ AdaptersModule, AuthModule ],
  exports    : [ FmService ]
})
export class FmModule {
}
