import * as mongoose from 'mongoose';

import P_OrariSettimaneStandardSchema from './P_OrariSettimaneStandard.Schema';
import type { IP_OrariSettimaneStandard } from './P_OrariSettimaneStandard.Types';


/* --------
* Model Definition
* -------- */
const P_OrariSettimaneStandard = mongoose.model<IP_OrariSettimaneStandard>(
  'P_OrariSettimaneStandard',
  P_OrariSettimaneStandardSchema as any
) as mongoose.Model<IP_OrariSettimaneStandard>;

/* --------
* Module Exports
* -------- */
export default P_OrariSettimaneStandard;

export { P_OrariSettimaneStandardSchema };

export type TP_OrariSettimaneStandardModel = Omit<typeof P_OrariSettimaneStandard, 'traslateAliases'> & {
  translateAliases(raw: Partial<IP_OrariSettimaneStandard>): any
};

export type TP_OrariSettimaneStandardDocument = 
& mongoose.Document<any, {}, IP_OrariSettimaneStandard>
& IP_OrariSettimaneStandard;

export { IP_OrariSettimaneStandard };