import * as mongoose from 'mongoose';

import RepartiSchema from './Reparti.Schema';
import type { IReparti } from './Reparti.Types';


/* --------
* Model Definition
* -------- */
const Reparti = mongoose.model<IReparti>(
  'Reparti',
  RepartiSchema as any
) as mongoose.Model<IReparti>;

/* --------
* Module Exports
* -------- */
export default Reparti;

export { RepartiSchema };

export type TRepartiModel = typeof Reparti;

export type TRepartiDocument = 
& mongoose.Document<any, {}, IReparti>
& IReparti;

export { IReparti };