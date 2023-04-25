import { Injectable } from '@nestjs/common';

import * as uuid from 'uuid';

import FmClient from '../../adapters/fm-adapter/lib/FmClient';
import { getRequiredEnv } from '../../utils';

import { ManageRecordDto } from './dto/insertRecordDto';


@Injectable()
export class FmService {

  private static readonly FM_STANDARD_SCRIPT: string = getRequiredEnv('FM_STANDARD_SCRIPT');

  private static readonly FM_STANDARD_LAYOUT: string = getRequiredEnv('FM_STANDARD_LAYOUT');

  private static readonly FM_SYSTEM_ID: string = getRequiredEnv('FM_SYSTEM_ID');


  public async insertRecord<D extends ManageRecordDto>(host: string, body: D): Promise<string> {

    /** Create FM Client */
    const client = FmClient.forHost(host).layout(FmService.FM_STANDARD_LAYOUT);

    /** Generate IdSessione */
    const IdSessione = uuid.v4();

    const newRecord = await client.insert({
      data: {
        fieldData     : {
          ...body,
          IdSessione      : IdSessione,
          IdSistemaEsterno: FmService.FM_SYSTEM_ID
        },
        script        : FmService.FM_STANDARD_SCRIPT,
        'script.param': IdSessione
      }
    });

    /** If no data, throw */
    if (!newRecord.response) {
      throw new Error('No record has been created');
    }

    return newRecord.response.scriptResult;

  }

}
