import * as mongoose from 'mongoose';

import ClassiMerceologicheSchema from './ClassiMerceologiche.Schema';
import type { IClassiMerceologiche } from './ClassiMerceologiche.Types';


/* --------
* Model Definition
* -------- */
const ClassiMerceologiche = mongoose.model<IClassiMerceologiche>(
'ClassiMerceologiche',
ClassiMerceologicheSchema as any
) as mongoose.Model<IClassiMerceologiche>;

/* --------
* Module Exports
* -------- */
export default ClassiMerceologiche;

export { ClassiMerceologicheSchema };

export type TClassiMerceologicheModel = Omit<typeof ClassiMerceologiche, 'traslateAliases'> & {
translateAliases(raw: Partial<IClassiMerceologiche>): any
};

export type TClassiMerceologicheDocument = 
& mongoose.Document<any, {}, IClassiMerceologiche>
& IClassiMerceologiche;

export { IClassiMerceologiche };