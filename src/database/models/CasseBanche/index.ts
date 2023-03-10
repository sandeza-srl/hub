import * as mongoose from 'mongoose';

import CasseBancheSchema from './CasseBanche.Schema';
import type { ICasseBanche } from './CasseBanche.Types';


/* --------
* Model Definition
* -------- */
const CasseBanche = mongoose.model<ICasseBanche>(
  'CasseBanche',
  CasseBancheSchema as any
) as mongoose.Model<ICasseBanche>;

/* --------
* Module Exports
* -------- */
export default CasseBanche;

export { CasseBancheSchema };

export type TCasseBancheModel = typeof CasseBanche;

export type TCasseBancheDocument = 
& mongoose.Document<any, {}, ICasseBanche>
& ICasseBanche;

export { ICasseBanche };