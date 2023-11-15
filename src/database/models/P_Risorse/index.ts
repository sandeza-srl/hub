import * as mongoose from 'mongoose';

import P_RisorseSchema from './P_Risorse.Schema';
import type { IP_Risorse } from './P_Risorse.Types';


/* --------
* Model Definition
* -------- */
const P_Risorse = mongoose.model<IP_Risorse>(
  'P_Risorse',
  P_RisorseSchema as any
) as mongoose.Model<IP_Risorse>;

/* --------
* Module Exports
* -------- */
export default P_Risorse;

export { P_RisorseSchema };

export type TP_RisorseModel = Omit<typeof P_Risorse, 'traslateAliases'> & {
  translateAliases(raw: Partial<IP_Risorse>): any
};

export type TP_RisorseDocument = 
& mongoose.Document<any, {}, IP_Risorse>
& IP_Risorse;

export { IP_Risorse };