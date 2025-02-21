import * as mongoose from 'mongoose';

import LingueSchema from './Lingue.Schema';
import type { ILingue } from './Lingue.Types';


/* --------
* Model Definition
* -------- */
const Lingue = mongoose.model<ILingue>(
'Lingue',
LingueSchema as any
) as mongoose.Model<ILingue>;

/* --------
* Module Exports
* -------- */
export default Lingue;

export { LingueSchema };

export type TLingueModel = Omit<typeof Lingue, 'traslateAliases'> & {
translateAliases(raw: Partial<ILingue>): any
};

export type TLingueDocument = 
& mongoose.Document<any, {}, ILingue>
& ILingue;

export { ILingue };