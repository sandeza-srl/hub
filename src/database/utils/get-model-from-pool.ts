import * as mongoose from 'mongoose';

import { BadRequestException } from '@nestjs/common';

import { AugmentedMap, isValidString } from '@proedis/utils';

import * as databaseModels from '../models';


/* --------
 * Models Pool
 * -------- */
const connectionModelsPool = new AugmentedMap<mongoose.Connection, AugmentedMap<string, mongoose.Model<any>>>();


/* --------
 * Utility Definition
 * -------- */
export function getModelFromPool<T = any>(
  connection: mongoose.Connection,
  name: string | undefined
): mongoose.Model<T> | undefined {

  /** Assert the collection name has been provided */
  if (!isValidString(name)) {
    throw new BadRequestException(
      'Could not load a valid Model without providing a name',
      'system/invalid-collection-name'
    );
  }

  /** Get the Connection Models Pool using the current provided connection */
  const modelsPool = connectionModelsPool.getOrAdd(
    connection,
    () => new AugmentedMap<string, mongoose.Model<any>>()
  );

  /** Get the models using collection param */
  return modelsPool.getOrAdd(name as string, () => {

    const Model = (databaseModels as any)[name] as mongoose.Model<any>;
    const Schema = (databaseModels as any)[`${name}Schema`] as mongoose.Schema;

    if (Schema && Model && Model.prototype instanceof mongoose.Model) {
      Schema.set('collection', Model.collection.name);
      return connection.model(Model.collection.name, Schema);
    }

    throw new BadRequestException(
      `Could not find a valid Model for requested collection ${name}`,
      'system/invalid-collection'
    );
  });

}
