import * as mongoose from 'mongoose';

import VociRegoleScadenzeSchema from './VociRegoleScadenze.Schema';
import type { IVociRegoleScadenze } from './VociRegoleScadenze.Types';


/* --------
* Model Definition
* -------- */
const VociRegoleScadenze = mongoose.model<IVociRegoleScadenze>(
  'VociRegoleScadenze',
  VociRegoleScadenzeSchema as any
) as mongoose.Model<IVociRegoleScadenze>;

/* --------
* Module Exports
* -------- */
export default VociRegoleScadenze;

export { VociRegoleScadenzeSchema };

export type TVociRegoleScadenzeModel = Omit<typeof VociRegoleScadenze, 'traslateAliases'> & {
  translateAliases(raw: Partial<IVociRegoleScadenze>): any
};

export type TVociRegoleScadenzeDocument = 
& mongoose.Document<any, {}, IVociRegoleScadenze>
& IVociRegoleScadenze;

export { IVociRegoleScadenze };