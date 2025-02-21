import * as mongoose from 'mongoose';

import RisorseSchema from './Risorse.Schema';
import type { IRisorse } from './Risorse.Types';


/* --------
* Model Definition
* -------- */
const Risorse = mongoose.model<IRisorse>(
'Risorse',
RisorseSchema as any
) as mongoose.Model<IRisorse>;

/* --------
* Module Exports
* -------- */
export default Risorse;

export { RisorseSchema };

export type TRisorseModel = Omit<typeof Risorse, 'traslateAliases'> & {
translateAliases(raw: Partial<IRisorse>): any
};

export type TRisorseDocument = 
& mongoose.Document<any, {}, IRisorse>
& IRisorse;

export { IRisorse };