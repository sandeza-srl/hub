import * as mongoose from 'mongoose';

import P_ImpostazioniSchema from './P_Impostazioni.Schema';
import type { IP_Impostazioni } from './P_Impostazioni.Types';


/* --------
* Model Definition
* -------- */
const P_Impostazioni = mongoose.model<IP_Impostazioni>(
'P_Impostazioni',
P_ImpostazioniSchema as any
) as mongoose.Model<IP_Impostazioni>;

/* --------
* Module Exports
* -------- */
export default P_Impostazioni;

export { P_ImpostazioniSchema };

export type TP_ImpostazioniModel = Omit<typeof P_Impostazioni, 'traslateAliases'> & {
translateAliases(raw: Partial<IP_Impostazioni>): any
};

export type TP_ImpostazioniDocument = 
& mongoose.Document<any, {}, IP_Impostazioni>
& IP_Impostazioni;

export { IP_Impostazioni };