import * as mongoose from 'mongoose';


/**
 * Mongoose defaults toObject and toJSON options.
 * These options allow exporting in JSON and in Objects all the defined
 * virtuals property (specified as 'alias') for all models and after
 *  transforming the object removing all fields starting with __ (double underscore).
 *  Double underscore starting field names are treated as 'private' fields
 */
export const MONGOOSE_TO_OBJECT_DEFAULTS: mongoose.ToObjectOptions = {
  virtuals : true,
  transform: (doc, ret) => {
    for (const field in ret) {
      if (field.match(/^__/)) {
        delete ret[field];
      }
    }
    return ret;
  }
};
