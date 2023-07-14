import * as mongoose from 'mongoose';


/* --------
 * Setup Mongoose Options
 * -------- */
const MONGOOSE_TO_OBJECT_DEFAULTS: mongoose.ToObjectOptions = {
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


mongoose.set('debug', process.env.NODE_ENV === 'development');
mongoose.set('toJSON', MONGOOSE_TO_OBJECT_DEFAULTS);
mongoose.set('toObject', MONGOOSE_TO_OBJECT_DEFAULTS);
mongoose.set('id', false);
mongoose.set('strict', true);
mongoose.pluralize(null);
