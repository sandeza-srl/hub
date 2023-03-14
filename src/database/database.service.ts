import * as mongoose from 'mongoose';

import { BadRequestException, Injectable } from '@nestjs/common';

import * as databaseModels from './models';


@Injectable()
export class DatabaseService {

  public getModelForCollection<T extends mongoose.Model<any>>(collection: string): T {
    /** Get the model from the exported objects */
    const Model = (databaseModels as any)[collection];

    /** Must assert model exists, and its prototype is assignable to the Mongoose Model class */
    if (!Model || !(Model.prototype instanceof mongoose.Model)) {
      throw new BadRequestException(
        `Could not find a valid schema for the requested collection, named '${collection}'`,
        'system/invalid-schema'
      );
    }

    /** Return found model */
    return Model as T;
  }

}
