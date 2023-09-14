import * as mongoose from 'mongoose';

import ImpostazioniEtichetteSchema from './ImpostazioniEtichette.Schema';
import type { IImpostazioniEtichette } from './ImpostazioniEtichette.Types';


/* --------
* Model Definition
* -------- */
const ImpostazioniEtichette = mongoose.model<IImpostazioniEtichette>(
  'ImpostazioniEtichette',
  ImpostazioniEtichetteSchema as any
) as mongoose.Model<IImpostazioniEtichette>;

/* --------
* Module Exports
* -------- */
export default ImpostazioniEtichette;

export { ImpostazioniEtichetteSchema };

export type TImpostazioniEtichetteModel = Omit<typeof ImpostazioniEtichette, 'traslateAliases'> & {
  translateAliases(raw: Partial<IImpostazioniEtichette>): any
};

export type TImpostazioniEtichetteDocument = 
& mongoose.Document<any, {}, IImpostazioniEtichette>
& IImpostazioniEtichette;

export { IImpostazioniEtichette };