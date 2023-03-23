import * as mongoose from 'mongoose';

import { BadRequestException, Injectable } from '@nestjs/common';


@Injectable()
export class SystemService {

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
        await Model.replaceOne({ _id: id }, source);
      }
    }).catch((err) => {
      console.log(err);
      throw new BadRequestException(
        'Could not update or create record',
        'invalid fields'
      );
    });


  }


  public async deleteDocumentInCollection(Model: mongoose.Model<any>, id: string) {

    /** Check required variables */
    if (id === undefined) {
      throw new BadRequestException(
        'Required variables missing',
        'Params missing: id'
      );
    }

    /** Call mongoose method to delete document */
    await Model.findByIdAndDelete(id);

  }

}
