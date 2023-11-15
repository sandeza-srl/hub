import * as mongoose from 'mongoose';

import P_SlotSettimaneStandardSchema from './P_SlotSettimaneStandard.Schema';
import type { IP_SlotSettimaneStandard } from './P_SlotSettimaneStandard.Types';


/* --------
* Model Definition
* -------- */
const P_SlotSettimaneStandard = mongoose.model<IP_SlotSettimaneStandard>(
  'P_SlotSettimaneStandard',
  P_SlotSettimaneStandardSchema as any
) as mongoose.Model<IP_SlotSettimaneStandard>;

/* --------
* Module Exports
* -------- */
export default P_SlotSettimaneStandard;

export { P_SlotSettimaneStandardSchema };

export type TP_SlotSettimaneStandardModel = Omit<typeof P_SlotSettimaneStandard, 'traslateAliases'> & {
  translateAliases(raw: Partial<IP_SlotSettimaneStandard>): any
};

export type TP_SlotSettimaneStandardDocument = 
& mongoose.Document<any, {}, IP_SlotSettimaneStandard>
& IP_SlotSettimaneStandard;

export { IP_SlotSettimaneStandard };