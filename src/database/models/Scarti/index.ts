import * as mongoose from 'mongoose';

import ScartiSchema from './Scarti.Schema';
import type { IScarti } from './Scarti.Types';


/* --------
* Model Definition
* -------- */
const Scarti = mongoose.model<IScarti>(
'Scarti',
ScartiSchema as any
) as mongoose.Model<IScarti>;

/* --------
* Module Exports
* -------- */
export default Scarti;

export { ScartiSchema };

export type TScartiModel = Omit<typeof Scarti, 'traslateAliases'> & {
translateAliases(raw: Partial<IScarti>): any
};

export type TScartiDocument = 
& mongoose.Document<any, {}, IScarti>
& IScarti;

export { IScarti };