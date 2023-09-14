import * as mongoose from 'mongoose';

import AnalisiCostoArticoli_VariabiliSchema from './AnalisiCostoArticoli_Variabili.Schema';
import type { IAnalisiCostoArticoli_Variabili } from './AnalisiCostoArticoli_Variabili.Types';


/* --------
* Model Definition
* -------- */
const AnalisiCostoArticoli_Variabili = mongoose.model<IAnalisiCostoArticoli_Variabili>(
  'AnalisiCostoArticoli_Variabili',
  AnalisiCostoArticoli_VariabiliSchema as any
) as mongoose.Model<IAnalisiCostoArticoli_Variabili>;

/* --------
* Module Exports
* -------- */
export default AnalisiCostoArticoli_Variabili;

export { AnalisiCostoArticoli_VariabiliSchema };

export type TAnalisiCostoArticoli_VariabiliModel = Omit<typeof AnalisiCostoArticoli_Variabili, 'traslateAliases'> & {
  translateAliases(raw: Partial<IAnalisiCostoArticoli_Variabili>): any
};

export type TAnalisiCostoArticoli_VariabiliDocument = 
& mongoose.Document<any, {}, IAnalisiCostoArticoli_Variabili>
& IAnalisiCostoArticoli_Variabili;

export { IAnalisiCostoArticoli_Variabili };