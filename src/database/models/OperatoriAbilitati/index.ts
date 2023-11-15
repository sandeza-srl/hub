import * as mongoose from 'mongoose';

import OperatoriAbilitatiSchema from './OperatoriAbilitati.Schema';
import type { IOperatoriAbilitati } from './OperatoriAbilitati.Types';


/* --------
* Model Definition
* -------- */
const OperatoriAbilitati = mongoose.model<IOperatoriAbilitati>(
  'OperatoriAbilitati',
  OperatoriAbilitatiSchema as any
) as mongoose.Model<IOperatoriAbilitati>;

/* --------
* Module Exports
* -------- */
export default OperatoriAbilitati;

export { OperatoriAbilitatiSchema };

export type TOperatoriAbilitatiModel = Omit<typeof OperatoriAbilitati, 'traslateAliases'> & {
  translateAliases(raw: Partial<IOperatoriAbilitati>): any
};

export type TOperatoriAbilitatiDocument = 
& mongoose.Document<any, {}, IOperatoriAbilitati>
& IOperatoriAbilitati;

export { IOperatoriAbilitati };