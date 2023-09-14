import * as mongoose from 'mongoose';

import OperatoriInterventiSchema from './OperatoriInterventi.Schema';
import type { IOperatoriInterventi } from './OperatoriInterventi.Types';


/* --------
* Model Definition
* -------- */
const OperatoriInterventi = mongoose.model<IOperatoriInterventi>(
  'OperatoriInterventi',
  OperatoriInterventiSchema as any
) as mongoose.Model<IOperatoriInterventi>;

/* --------
* Module Exports
* -------- */
export default OperatoriInterventi;

export { OperatoriInterventiSchema };

export type TOperatoriInterventiModel = Omit<typeof OperatoriInterventi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IOperatoriInterventi>): any
};

export type TOperatoriInterventiDocument = 
& mongoose.Document<any, {}, IOperatoriInterventi>
& IOperatoriInterventi;

export { IOperatoriInterventi };