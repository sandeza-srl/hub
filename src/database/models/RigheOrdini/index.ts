import * as mongoose from 'mongoose';

import RigheOrdiniSchema from './RigheOrdini.Schema';
import type { IRigheOrdini } from './RigheOrdini.Types';


/* --------
* Model Definition
* -------- */
const RigheOrdini = mongoose.model<IRigheOrdini>(
  'RigheOrdini',
  RigheOrdiniSchema as any
) as mongoose.Model<IRigheOrdini>;

/* --------
* Module Exports
* -------- */
export default RigheOrdini;

export { RigheOrdiniSchema };

export type TRigheOrdiniModel = Omit<typeof RigheOrdini, 'traslateAliases'> & {
  translateAliases(raw: Partial<IRigheOrdini>): any
};

export type TRigheOrdiniDocument = 
& mongoose.Document<any, {}, IRigheOrdini>
& IRigheOrdini;

export { IRigheOrdini };