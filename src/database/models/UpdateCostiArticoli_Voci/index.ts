import * as mongoose from 'mongoose';

import UpdateCostiArticoli_VociSchema from './UpdateCostiArticoli_Voci.Schema';
import type { IUpdateCostiArticoli_Voci } from './UpdateCostiArticoli_Voci.Types';


/* --------
* Model Definition
* -------- */
const UpdateCostiArticoli_Voci = mongoose.model<IUpdateCostiArticoli_Voci>(
  'UpdateCostiArticoli_Voci',
  UpdateCostiArticoli_VociSchema as any
) as mongoose.Model<IUpdateCostiArticoli_Voci>;

/* --------
* Module Exports
* -------- */
export default UpdateCostiArticoli_Voci;

export { UpdateCostiArticoli_VociSchema };

export type TUpdateCostiArticoli_VociModel = Omit<typeof UpdateCostiArticoli_Voci, 'traslateAliases'> & {
  translateAliases(raw: Partial<IUpdateCostiArticoli_Voci>): any
};

export type TUpdateCostiArticoli_VociDocument = 
& mongoose.Document<any, {}, IUpdateCostiArticoli_Voci>
& IUpdateCostiArticoli_Voci;

export { IUpdateCostiArticoli_Voci };