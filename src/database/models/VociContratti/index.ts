import * as mongoose from 'mongoose';

import VociContrattiSchema from './VociContratti.Schema';
import type { IVociContratti } from './VociContratti.Types';


/* --------
* Model Definition
* -------- */
const VociContratti = mongoose.model<IVociContratti>(
'VociContratti',
VociContrattiSchema as any
) as mongoose.Model<IVociContratti>;

/* --------
* Module Exports
* -------- */
export default VociContratti;

export { VociContrattiSchema };

export type TVociContrattiModel = Omit<typeof VociContratti, 'traslateAliases'> & {
translateAliases(raw: Partial<IVociContratti>): any
};

export type TVociContrattiDocument = 
& mongoose.Document<any, {}, IVociContratti>
& IVociContratti;

export { IVociContratti };