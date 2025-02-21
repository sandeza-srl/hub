import * as mongoose from 'mongoose';

import UtenteSocietaSchema from './UtenteSocieta.Schema';
import type { IUtenteSocieta } from './UtenteSocieta.Types';


/* --------
* Model Definition
* -------- */
const UtenteSocieta = mongoose.model<IUtenteSocieta>(
'UtenteSocieta',
UtenteSocietaSchema as any
) as mongoose.Model<IUtenteSocieta>;

/* --------
* Module Exports
* -------- */
export default UtenteSocieta;

export { UtenteSocietaSchema };

export type TUtenteSocietaModel = Omit<typeof UtenteSocieta, 'traslateAliases'> & {
translateAliases(raw: Partial<IUtenteSocieta>): any
};

export type TUtenteSocietaDocument = 
& mongoose.Document<any, {}, IUtenteSocieta>
& IUtenteSocieta;

export { IUtenteSocieta };