import * as mongoose from 'mongoose';

import PresenzeSchema from './Presenze.Schema';
import type { IPresenze } from './Presenze.Types';


/* --------
* Model Definition
* -------- */
const Presenze = mongoose.model<IPresenze>(
'Presenze',
PresenzeSchema as any
) as mongoose.Model<IPresenze>;

/* --------
* Module Exports
* -------- */
export default Presenze;

export { PresenzeSchema };

export type TPresenzeModel = Omit<typeof Presenze, 'traslateAliases'> & {
translateAliases(raw: Partial<IPresenze>): any
};

export type TPresenzeDocument = 
& mongoose.Document<any, {}, IPresenze>
& IPresenze;

export { IPresenze };