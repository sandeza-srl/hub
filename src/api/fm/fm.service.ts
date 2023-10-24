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


  public async insertRecord<D extends ManageRecordDto>(host: string, body: D): Promise<string>;
  public async insertRecord<D extends ManageRecordDto>(host: string, body: D[]): Promise<string>;
  /**
   * Function to request Fm Server API
   * @param host
   * @param body
   */
  public async insertRecord<D extends ManageRecordDto>(host: string, body: D | D[]): Promise<string> {

    /** Create FM Client */
    const client = FmClient.forHost(host).layout(FmService.FM_STANDARD_LAYOUT);

    /** Assert data to send is always an array of elements */
    /** Generate IdSessione */
    const sessionId = uuid.v4();

    const insertsPromises = (Array.isArray(body) ? body : [ body ])
      .map((element, index) => new Promise(async (resolve) => {
        const newRecord = await client.insert({
          data: {
            fieldData: {
              ...element,
              IdSessione      : sessionId,
              IdSistemaEsterno: FmService.FM_SYSTEM_ID
            }
          }
        });

        return resolve(newRecord.response);
      }));

    await Promise.all(insertsPromises);


    //TODO: API Call to execute a filemaker script. Need to create the function in the fm Client
    // TODO: Convert the result, that is always a string, into a JSON
    const scriptResult = await client.runScript(FmService.FM_STANDARD_SCRIPT, sessionId);

    /** If no data, throw */
    if (!scriptResult.response) {
      throw new Error('No record has been created');
    }
    return scriptResult.response.scriptResult;

  }


  /**
   * Run FileMaker Custom Script, passing a body as script parameters
   * @param host
   * @param database
   * @param layout
   * @param script
   * @param body
   */
  public async executeFmScript(host: string, database: string, layout: string, script: string, body: any) {

    /** Create FM Client */
    const client = FmClient.forHost(host).database(database).layout(layout);

    /** Run the script using parameters */
    const scriptResult = await client.runScript(script, JSON.stringify(body));

    /** Return the response of the FM script */
    return scriptResult.response.scriptResult;

  }

}
