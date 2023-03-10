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

export type TOperatoriAbilitatiModel = typeof OperatoriAbilitati;

export type TOperatoriAbilitatiDocument = 
& mongoose.Document<any, {}, IOperatoriAbilitati>
& IOperatoriAbilitati;

export { IOperatoriAbilitati };