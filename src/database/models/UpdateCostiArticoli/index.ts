import * as mongoose from 'mongoose';

import UpdateCostiArticoliSchema from './UpdateCostiArticoli.Schema';
import type { IUpdateCostiArticoli } from './UpdateCostiArticoli.Types';


/* --------
* Model Definition
* -------- */
const UpdateCostiArticoli = mongoose.model<IUpdateCostiArticoli>(
'UpdateCostiArticoli',
UpdateCostiArticoliSchema as any
) as mongoose.Model<IUpdateCostiArticoli>;

/* --------
* Module Exports
* -------- */
export default UpdateCostiArticoli;

export { UpdateCostiArticoliSchema };

export type TUpdateCostiArticoliModel = Omit<typeof UpdateCostiArticoli, 'traslateAliases'> & {
translateAliases(raw: Partial<IUpdateCostiArticoli>): any
};

export type TUpdateCostiArticoliDocument = 
& mongoose.Document<any, {}, IUpdateCostiArticoli>
& IUpdateCostiArticoli;

export { IUpdateCostiArticoli };