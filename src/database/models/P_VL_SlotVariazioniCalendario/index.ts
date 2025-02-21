import * as mongoose from 'mongoose';

import P_VL_SlotVariazioniCalendarioSchema from './P_VL_SlotVariazioniCalendario.Schema';
import type { IP_VL_SlotVariazioniCalendario } from './P_VL_SlotVariazioniCalendario.Types';


/* --------
* Model Definition
* -------- */
const P_VL_SlotVariazioniCalendario = mongoose.model<IP_VL_SlotVariazioniCalendario>(
'P_VL_SlotVariazioniCalendario',
P_VL_SlotVariazioniCalendarioSchema as any
) as mongoose.Model<IP_VL_SlotVariazioniCalendario>;

/* --------
* Module Exports
* -------- */
export default P_VL_SlotVariazioniCalendario;

export { P_VL_SlotVariazioniCalendarioSchema };

export type TP_VL_SlotVariazioniCalendarioModel = Omit<typeof P_VL_SlotVariazioniCalendario, 'traslateAliases'> & {
translateAliases(raw: Partial<IP_VL_SlotVariazioniCalendario>): any
};

export type TP_VL_SlotVariazioniCalendarioDocument = 
& mongoose.Document<any, {}, IP_VL_SlotVariazioniCalendario>
& IP_VL_SlotVariazioniCalendario;

export { IP_VL_SlotVariazioniCalendario };