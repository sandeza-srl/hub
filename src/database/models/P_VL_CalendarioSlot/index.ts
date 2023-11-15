import * as mongoose from 'mongoose';

import P_VL_CalendarioSlotSchema from './P_VL_CalendarioSlot.Schema';
import type { IP_VL_CalendarioSlot } from './P_VL_CalendarioSlot.Types';


/* --------
* Model Definition
* -------- */
const P_VL_CalendarioSlot = mongoose.model<IP_VL_CalendarioSlot>(
  'P_VL_CalendarioSlot',
  P_VL_CalendarioSlotSchema as any
) as mongoose.Model<IP_VL_CalendarioSlot>;

/* --------
* Module Exports
* -------- */
export default P_VL_CalendarioSlot;

export { P_VL_CalendarioSlotSchema };

export type TP_VL_CalendarioSlotModel = Omit<typeof P_VL_CalendarioSlot, 'traslateAliases'> & {
  translateAliases(raw: Partial<IP_VL_CalendarioSlot>): any
};

export type TP_VL_CalendarioSlotDocument = 
& mongoose.Document<any, {}, IP_VL_CalendarioSlot>
& IP_VL_CalendarioSlot;

export { IP_VL_CalendarioSlot };