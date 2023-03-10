import * as mongoose from 'mongoose';

import AliquoteSchema from './Aliquote.Schema';
import type { IAliquote } from './Aliquote.Types';


/* --------
* Model Definition
* -------- */
const Aliquote = mongoose.model<IAliquote>(
  'Aliquote',
  AliquoteSchema as any
) as mongoose.Model<IAliquote>;

/* --------
* Module Exports
* -------- */
export default Aliquote;

export { AliquoteSchema };

export type TAliquoteModel = typeof Aliquote;

export type TAliquoteDocument = 
& mongoose.Document<any, {}, IAliquote>
& IAliquote;

export { IAliquote };