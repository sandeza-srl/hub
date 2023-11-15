import * as mongoose from 'mongoose';

import UpdateCostiArticoli_VariazioniSchema from './UpdateCostiArticoli_Variazioni.Schema';
import type { IUpdateCostiArticoli_Variazioni } from './UpdateCostiArticoli_Variazioni.Types';


/* --------
* Model Definition
* -------- */
const UpdateCostiArticoli_Variazioni = mongoose.model<IUpdateCostiArticoli_Variazioni>(
  'UpdateCostiArticoli_Variazioni',
  UpdateCostiArticoli_VariazioniSchema as any
) as mongoose.Model<IUpdateCostiArticoli_Variazioni>;

/* --------
* Module Exports
* -------- */
export default UpdateCostiArticoli_Variazioni;

export { UpdateCostiArticoli_VariazioniSchema };

export type TUpdateCostiArticoli_VariazioniModel = Omit<typeof UpdateCostiArticoli_Variazioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IUpdateCostiArticoli_Variazioni>): any
};

export type TUpdateCostiArticoli_VariazioniDocument = 
& mongoose.Document<any, {}, IUpdateCostiArticoli_Variazioni>
& IUpdateCostiArticoli_Variazioni;

export { IUpdateCostiArticoli_Variazioni };