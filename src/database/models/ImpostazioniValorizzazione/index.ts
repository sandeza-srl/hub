import * as mongoose from 'mongoose';

import ImpostazioniValorizzazioneSchema from './ImpostazioniValorizzazione.Schema';
import type { IImpostazioniValorizzazione } from './ImpostazioniValorizzazione.Types';


/* --------
* Model Definition
* -------- */
const ImpostazioniValorizzazione = mongoose.model<IImpostazioniValorizzazione>(
  'ImpostazioniValorizzazione',
  ImpostazioniValorizzazioneSchema as any
) as mongoose.Model<IImpostazioniValorizzazione>;

/* --------
* Module Exports
* -------- */
export default ImpostazioniValorizzazione;

export { ImpostazioniValorizzazioneSchema };

export type TImpostazioniValorizzazioneModel = Omit<typeof ImpostazioniValorizzazione, 'traslateAliases'> & {
  translateAliases(raw: Partial<IImpostazioniValorizzazione>): any
};

export type TImpostazioniValorizzazioneDocument = 
& mongoose.Document<any, {}, IImpostazioniValorizzazione>
& IImpostazioniValorizzazione;

export { IImpostazioniValorizzazione };