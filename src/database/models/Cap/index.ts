import * as mongoose from 'mongoose';

import CapSchema from './Cap.Schema';
import type { ICap } from './Cap.Types';


/* --------
* Model Definition
* -------- */
const Cap = mongoose.model<ICap>(
'Cap',
CapSchema as any
) as mongoose.Model<ICap>;

/* --------
* Module Exports
* -------- */
export default Cap;

export { CapSchema };

export type TCapModel = Omit<typeof Cap, 'traslateAliases'> & {
translateAliases(raw: Partial<ICap>): any
};

export type TCapDocument = 
& mongoose.Document<any, {}, ICap>
& ICap;

export { ICap };