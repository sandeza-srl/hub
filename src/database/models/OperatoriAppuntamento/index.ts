import * as mongoose from 'mongoose';

import OperatoriAppuntamentoSchema from './OperatoriAppuntamento.Schema';
import type { IOperatoriAppuntamento } from './OperatoriAppuntamento.Types';


/* --------
* Model Definition
* -------- */
const OperatoriAppuntamento = mongoose.model<IOperatoriAppuntamento>(
  'OperatoriAppuntamento',
  OperatoriAppuntamentoSchema as any
) as mongoose.Model<IOperatoriAppuntamento>;

/* --------
* Module Exports
* -------- */
export default OperatoriAppuntamento;

export { OperatoriAppuntamentoSchema };

export type TOperatoriAppuntamentoModel = Omit<typeof OperatoriAppuntamento, 'traslateAliases'> & {
  translateAliases(raw: Partial<IOperatoriAppuntamento>): any
};

export type TOperatoriAppuntamentoDocument = 
& mongoose.Document<any, {}, IOperatoriAppuntamento>
& IOperatoriAppuntamento;

export { IOperatoriAppuntamento };