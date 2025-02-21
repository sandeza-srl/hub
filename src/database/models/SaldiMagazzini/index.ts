import * as mongoose from 'mongoose';

import SaldiMagazziniSchema from './SaldiMagazzini.Schema';
import type { ISaldiMagazzini } from './SaldiMagazzini.Types';


/* --------
* Model Definition
* -------- */
const SaldiMagazzini = mongoose.model<ISaldiMagazzini>(
'SaldiMagazzini',
SaldiMagazziniSchema as any
) as mongoose.Model<ISaldiMagazzini>;

/* --------
* Module Exports
* -------- */
export default SaldiMagazzini;

export { SaldiMagazziniSchema };

export type TSaldiMagazziniModel = Omit<typeof SaldiMagazzini, 'traslateAliases'> & {
translateAliases(raw: Partial<ISaldiMagazzini>): any
};

export type TSaldiMagazziniDocument = 
& mongoose.Document<any, {}, ISaldiMagazzini>
& ISaldiMagazzini;

export { ISaldiMagazzini };