import * as mongoose from 'mongoose';

import RevisioniDocumentiSchema from './RevisioniDocumenti.Schema';
import type { IRevisioniDocumenti } from './RevisioniDocumenti.Types';


/* --------
* Model Definition
* -------- */
const RevisioniDocumenti = mongoose.model<IRevisioniDocumenti>(
  'RevisioniDocumenti',
  RevisioniDocumentiSchema as any
) as mongoose.Model<IRevisioniDocumenti>;

/* --------
* Module Exports
* -------- */
export default RevisioniDocumenti;

export { RevisioniDocumentiSchema };

export type TRevisioniDocumentiModel = typeof RevisioniDocumenti;

export type TRevisioniDocumentiDocument = 
& mongoose.Document<any, {}, IRevisioniDocumenti>
& IRevisioniDocumenti;

export { IRevisioniDocumenti };