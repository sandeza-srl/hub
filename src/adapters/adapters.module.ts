import { Module } from '@nestjs/common';
import { FmAdapterModule } from './fm-adapter/fm-adapter.module';


@Module({
  imports: [ FmAdapterModule ],
  exports: [ FmAdapterModule ]
})
export class AdaptersModule {
}
