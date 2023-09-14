import * as mongoose from 'mongoose';

import P_VariazioniCalendarioSchema from './P_VariazioniCalendario.Schema';
import type { IP_VariazioniCalendario } from './P_VariazioniCalendario.Types';


/* --------
* Model Definition
* -------- */
const P_VariazioniCalendario = mongoose.model<IP_VariazioniCalendario>(
  'P_VariazioniCalendario',
  P_VariazioniCalendarioSchema as any
) as mongoose.Model<IP_VariazioniCalendario>;

/* --------
* Module Exports
* -------- */
export default P_VariazioniCalendario;

export { P_VariazioniCalendarioSchema };

export type TP_VariazioniCalendarioModel = Omit<typeof P_VariazioniCalendario, 'traslateAliases'> & {
  translateAliases(raw: Partial<IP_VariazioniCalendario>): any
};

export type TP_VariazioniCalendarioDocument = 
& mongoose.Document<any, {}, IP_VariazioniCalendario>
& IP_VariazioniCalendario;

export { IP_VariazioniCalendario };