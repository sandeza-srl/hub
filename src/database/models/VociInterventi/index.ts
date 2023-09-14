import * as mongoose from 'mongoose';

import VociInterventiSchema from './VociInterventi.Schema';
import type { IVociInterventi } from './VociInterventi.Types';


/* --------
* Model Definition
* -------- */
const VociInterventi = mongoose.model<IVociInterventi>(
  'VociInterventi',
  VociInterventiSchema as any
) as mongoose.Model<IVociInterventi>;

/* --------
* Module Exports
* -------- */
export default VociInterventi;

export { VociInterventiSchema };

export type TVociInterventiModel = Omit<typeof VociInterventi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IVociInterventi>): any
};

export type TVociInterventiDocument = 
& mongoose.Document<any, {}, IVociInterventi>
& IVociInterventi;

export { IVociInterventi };