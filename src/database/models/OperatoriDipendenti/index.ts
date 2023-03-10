import * as mongoose from 'mongoose';

import OperatoriDipendentiSchema from './OperatoriDipendenti.Schema';
import type { IOperatoriDipendenti } from './OperatoriDipendenti.Types';


/* --------
* Model Definition
* -------- */
const OperatoriDipendenti = mongoose.model<IOperatoriDipendenti>(
  'OperatoriDipendenti',
  OperatoriDipendentiSchema as any
) as mongoose.Model<IOperatoriDipendenti>;

/* --------
* Module Exports
* -------- */
export default OperatoriDipendenti;

export { OperatoriDipendentiSchema };

export type TOperatoriDipendentiModel = typeof OperatoriDipendenti;

export type TOperatoriDipendentiDocument = 
& mongoose.Document<any, {}, IOperatoriDipendenti>
& IOperatoriDipendenti;

export { IOperatoriDipendenti };