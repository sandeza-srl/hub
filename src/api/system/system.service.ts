import * as mongoose from 'mongoose';

import { BadRequestException, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';

import { ROUTE_MODEL } from '../../database/database.providers';
import { QueryOptions } from 'mongoose-query-parser';
import { will } from '@proedis/utils';


@Injectable()
export class SystemService {


  constructor(
    @Inject(ROUTE_MODEL)
    private readonly routeModel: mongoose.Model<any>
  ) {
  }


  public async getDocuments(queryOptions?: QueryOptions): Promise<mongoose.Document[]> {

    /** Extract Query Options */
    const {
      filter,
      sort,
      limit,
      skip,
      select
    } = queryOptions || {};

    /** Build the query */
    let query = this.routeModel.find(this.routeModel.translateAliases(filter));

    /** Append extra options */
    if (sort) {
      query = query.sort(this.routeModel.translateAliases(sort));
    }

    if (limit) {
      query = query.limit(limit);
    }

    if (skip) {
      query = query.skip(skip);
    }

    if (select) {
      query = query.select(this.routeModel.translateAliases(select));
    }

    /** Execute the Query */
    const [ error, docs ] = await will(query.exec());

    /** Assert no error has been found */
    if (error) {
      throw new InternalServerErrorException(error, 'data-accessor/query-error');
    }

    return docs;
  }


  public async upsertDocumentInCollection(id: string, source: any) {

    /** Check if the record already exists  */
    await this.routeModel.findById(id).exec().then(async (exist) => {

      /** Depending on the result create or update the record */
      if (exist === null) {

        // Create the record
        const record = new this.routeModel({ _id: id, ...source });
        await record.save();
      }
      else {

        // Update the record
        await this.routeModel.replaceOne({ _id: id }, source);
      }
    }).catch(() => {
      throw new BadRequestException(
        'Could not update or create record',
        'invalid fields'
      );
    });

    /** Return a JSON with ID and message */
    return {
      recordID: id,
      message : 'Record created/updated successfully'
    };

  }


  public async deleteDocumentInCollection(id: string) {

    /** Check required variables */
    if (id === undefined) {
      throw new BadRequestException(
        'Required variables missing',
        'Params missing: id'
      );
    }

    /** Call mongoose method to delete document */
    await this.routeModel.findByIdAndDelete(id);

    /** Return a JSON with ID and message */
    return {
      recordID: id,
      message : 'Record deleted successfully'
    };

  }

}
