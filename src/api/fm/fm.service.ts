import { HttpException, Injectable } from '@nestjs/common';

import * as uuid from 'uuid';

import FmClient from '../../adapters/fm-adapter/lib/FmClient';
import { getRequiredEnv } from '../../utils';

import { ManageRecordDto } from './dto/insertRecordDto';


@Injectable()
export class FmService {

  private static readonly FM_STANDARD_SCRIPT: string = getRequiredEnv('FM_STANDARD_SCRIPT');

  private static readonly FM_STANDARD_LAYOUT: string = getRequiredEnv('FM_STANDARD_LAYOUT');

  private static readonly FM_STANDARD_LAYOUT_MULTIPLE_RECORDS: string = getRequiredEnv(
    'FM_STANDARD_LAYOUT_MULTIPLE_RECORDS');

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
      .map((element) => new Promise(async (resolve) => {
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
   * Inserts multiple records into the specified host using the provided records data.
   * @param {string} host - The host to insert the records into.
   * @param {Array|Object} records - The records to insert. Can be a single object or an array of objects.
   * @return {Promise} - A promise that resolves with the result of the insert operation.
   * @throws {HttpException} - If the record creation response is falsy.
   * @throws {Error} - If the script result response is falsy.
   */
  public async insertMultipleRecords<D extends ManageRecordDto>(host: string, records: D | D[]): Promise<string> {

    /** Create FM Client */
    const client = FmClient.forHost(host).layout(FmService.FM_STANDARD_LAYOUT_MULTIPLE_RECORDS);

    /** Generate sessionId */
    const sessionId = uuid.v4();

    /** Assert the body is an array */
    const body = (Array.isArray(records) ? records : [ records ])
      .map((element: any) => {
        return {
          'ImportInZ::IdSessione'      : sessionId,
          'ImportInZ::IdSistemaEsterno': FmService.FM_SYSTEM_ID,
          ...element
        };
      });

    /** Call insert function of the Fm Client */
    const recordCreationResponse = await client.insert({
      data: {
        fieldData : {
          IdSessione      : sessionId,
          IdSistemaEsterno: FmService.FM_SYSTEM_ID
        },
        portalData: {
          ImportInZ: body
        }
      }
    });

    /** Check the correct record creation */
    if (!recordCreationResponse.response) {
      throw new HttpException(recordCreationResponse, recordCreationResponse.response);
    }

    /** Run script to elaborate records */
    const scriptResult = await client.runScript(FmService.FM_STANDARD_SCRIPT, sessionId);

    /** If no data, throw */
    if (!scriptResult.response) {
      throw new Error('No record has been created');
    }
    return scriptResult.response.scriptResult;

  }


  /**
   * Function to request Fm Server API to insert a record with a parametrized request
   * @param host
   * @param database
   * @param layout
   * @param script
   * @param body
   */
  public async insertRecordAndRunScriptParametrized(
    host: string,
    database: string,
    layout: string,
    script: string,
    body: any
  ): Promise<string> {

    /** Create FM Client */
    const client = FmClient.forHost(host).database(database).layout(layout);

    /** Generate IdSessione */
    const sessionId = uuid.v4();

    /** Call insert function of the Fm Client */
    const recordCreationResponse = await client.insert({
      data: {
        fieldData: {
          IdSessione: sessionId,
          body      : JSON.stringify(body)
        }
      }
    });

    /** Run FM script */
    const scriptResult = await client.runScript(script, sessionId);

    /** return fm script result */
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
