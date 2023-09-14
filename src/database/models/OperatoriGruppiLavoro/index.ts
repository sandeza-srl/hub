import * as mongoose from 'mongoose';

import OperatoriGruppiLavoroSchema from './OperatoriGruppiLavoro.Schema';
import type { IOperatoriGruppiLavoro } from './OperatoriGruppiLavoro.Types';


/* --------
* Model Definition
* -------- */
const OperatoriGruppiLavoro = mongoose.model<IOperatoriGruppiLavoro>(
  'OperatoriGruppiLavoro',
  OperatoriGruppiLavoroSchema as any
) as mongoose.Model<IOperatoriGruppiLavoro>;

/* --------
* Module Exports
* -------- */
export default OperatoriGruppiLavoro;

export { OperatoriGruppiLavoroSchema };

export type TOperatoriGruppiLavoroModel = Omit<typeof OperatoriGruppiLavoro, 'traslateAliases'> & {
  translateAliases(raw: Partial<IOperatoriGruppiLavoro>): any
};

export type TOperatoriGruppiLavoroDocument = 
& mongoose.Document<any, {}, IOperatoriGruppiLavoro>
& IOperatoriGruppiLavoro;

export { IOperatoriGruppiLavoro };