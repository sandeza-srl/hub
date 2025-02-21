import * as mongoose from 'mongoose';

import P_SettimaneStandardSchema from './P_SettimaneStandard.Schema';
import type { IP_SettimaneStandard } from './P_SettimaneStandard.Types';


/* --------
* Model Definition
* -------- */
const P_SettimaneStandard = mongoose.model<IP_SettimaneStandard>(
'P_SettimaneStandard',
P_SettimaneStandardSchema as any
) as mongoose.Model<IP_SettimaneStandard>;

/* --------
* Module Exports
* -------- */
export default P_SettimaneStandard;

export { P_SettimaneStandardSchema };

export type TP_SettimaneStandardModel = Omit<typeof P_SettimaneStandard, 'traslateAliases'> & {
translateAliases(raw: Partial<IP_SettimaneStandard>): any
};

export type TP_SettimaneStandardDocument = 
& mongoose.Document<any, {}, IP_SettimaneStandard>
& IP_SettimaneStandard;

export { IP_SettimaneStandard };