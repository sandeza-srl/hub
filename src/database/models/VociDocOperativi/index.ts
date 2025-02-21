import * as mongoose from 'mongoose';

import VociDocOperativiSchema from './VociDocOperativi.Schema';
import type { IVociDocOperativi } from './VociDocOperativi.Types';


/* --------
* Model Definition
* -------- */
const VociDocOperativi = mongoose.model<IVociDocOperativi>(
'VociDocOperativi',
VociDocOperativiSchema as any
) as mongoose.Model<IVociDocOperativi>;

/* --------
* Module Exports
* -------- */
export default VociDocOperativi;

export { VociDocOperativiSchema };

export type TVociDocOperativiModel = Omit<typeof VociDocOperativi, 'traslateAliases'> & {
translateAliases(raw: Partial<IVociDocOperativi>): any
};

export type TVociDocOperativiDocument = 
& mongoose.Document<any, {}, IVociDocOperativi>
& IVociDocOperativi;

export { IVociDocOperativi };