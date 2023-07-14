import { Module } from '@nestjs/common';

import { DatabaseService } from './database.service';

import { TokenModule } from '../token/token.module';
import { DATABASE_CONNECTION, DatabaseConnectionProvider } from './database.providers';


/* --------
 * Module Definition
 * -------- */
@Module({
  providers: [
    DatabaseService,
    DatabaseConnectionProvider
  ],
  imports  : [ TokenModule ],
  exports  : [ DATABASE_CONNECTION ]
})
export class DatabaseModule {
}
