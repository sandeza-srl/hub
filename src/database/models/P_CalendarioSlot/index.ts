import * as mongoose from 'mongoose';

import P_CalendarioSlotSchema from './P_CalendarioSlot.Schema';
import type { IP_CalendarioSlot } from './P_CalendarioSlot.Types';


/* --------
* Model Definition
* -------- */
const P_CalendarioSlot = mongoose.model<IP_CalendarioSlot>(
  'P_CalendarioSlot',
  P_CalendarioSlotSchema as any
) as mongoose.Model<IP_CalendarioSlot>;

/* --------
* Module Exports
* -------- */
export default P_CalendarioSlot;

export { P_CalendarioSlotSchema };

export type TP_CalendarioSlotModel = Omit<typeof P_CalendarioSlot, 'traslateAliases'> & {
  translateAliases(raw: Partial<IP_CalendarioSlot>): any
};

export type TP_CalendarioSlotDocument = 
& mongoose.Document<any, {}, IP_CalendarioSlot>
& IP_CalendarioSlot;

export { IP_CalendarioSlot };