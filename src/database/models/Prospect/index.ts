import * as mongoose from 'mongoose';

import ProspectSchema from './Prospect.Schema';
import type { IProspect } from './Prospect.Types';


/* --------
* Model Definition
* -------- */
const Prospect = mongoose.model<IProspect>(
'Prospect',
ProspectSchema as any
) as mongoose.Model<IProspect>;

/* --------
* Module Exports
* -------- */
export default Prospect;

export { ProspectSchema };

export type TProspectModel = Omit<typeof Prospect, 'traslateAliases'> & {
translateAliases(raw: Partial<IProspect>): any
};

export type TProspectDocument = 
& mongoose.Document<any, {}, IProspect>
& IProspect;

export { IProspect };