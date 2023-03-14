import * as mongoose from 'mongoose';

import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';


@Injectable()
export class SystemService {

  constructor(
    private readonly databaseService: DatabaseService
  ) {
  }


  public async upsertDocumentInCollection(Model: mongoose.Model<any>, id: string, source: any) {

    /** Check if the record already exists  */
    await Model.findById(id).exec().then(async (exist) => {

      /** Depending on the result create or update the record */
      if (exist === null) {

        // Create the record
        const record = new Model({ _id: source.IdChiavePrimaria, ...source });
        await record.save();
      }
      else {

        // Update the record
        console.log('update record');
        /*await Model.updateOne(source);*/
      }
    }).catch(() => {
      throw new BadRequestException(
        'Could not update or create record',
        'invalid fields'
      );
    });


  }

}
