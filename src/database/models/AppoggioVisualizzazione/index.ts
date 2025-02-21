import * as mongoose from 'mongoose';

import AppoggioVisualizzazioneSchema from './AppoggioVisualizzazione.Schema';
import type { IAppoggioVisualizzazione } from './AppoggioVisualizzazione.Types';


/* --------
* Model Definition
* -------- */
const AppoggioVisualizzazione = mongoose.model<IAppoggioVisualizzazione>(
'AppoggioVisualizzazione',
AppoggioVisualizzazioneSchema as any
) as mongoose.Model<IAppoggioVisualizzazione>;

/* --------
* Module Exports
* -------- */
export default AppoggioVisualizzazione;

export { AppoggioVisualizzazioneSchema };

export type TAppoggioVisualizzazioneModel = Omit<typeof AppoggioVisualizzazione, 'traslateAliases'> & {
translateAliases(raw: Partial<IAppoggioVisualizzazione>): any
};

export type TAppoggioVisualizzazioneDocument = 
& mongoose.Document<any, {}, IAppoggioVisualizzazione>
& IAppoggioVisualizzazione;

export { IAppoggioVisualizzazione };