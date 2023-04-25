import { Module } from '@nestjs/common';
import { AdaptersModule } from './adapters/adapters.module';

import { ApiModule } from './api/api.module';


@Module({
  imports    : [ ApiModule, AdaptersModule ],
  controllers: [],
  providers  : []
})
export class AppModule {
}
