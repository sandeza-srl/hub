import * as mongoose from 'mongoose';

import OperatoriPresenzeSchema from './OperatoriPresenze.Schema';
import type { IOperatoriPresenze } from './OperatoriPresenze.Types';


/* --------
* Model Definition
* -------- */
const OperatoriPresenze = mongoose.model<IOperatoriPresenze>(
  'OperatoriPresenze',
  OperatoriPresenzeSchema as any
) as mongoose.Model<IOperatoriPresenze>;

/* --------
* Module Exports
* -------- */
export default OperatoriPresenze;

export { OperatoriPresenzeSchema };

export type TOperatoriPresenzeModel = Omit<typeof OperatoriPresenze, 'traslateAliases'> & {
  translateAliases(raw: Partial<IOperatoriPresenze>): any
};

export type TOperatoriPresenzeDocument = 
& mongoose.Document<any, {}, IOperatoriPresenze>
& IOperatoriPresenze;

export { IOperatoriPresenze };