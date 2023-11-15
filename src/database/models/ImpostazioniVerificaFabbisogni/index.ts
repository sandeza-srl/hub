import * as mongoose from 'mongoose';

import ImpostazioniVerificaFabbisogniSchema from './ImpostazioniVerificaFabbisogni.Schema';
import type { IImpostazioniVerificaFabbisogni } from './ImpostazioniVerificaFabbisogni.Types';


/* --------
* Model Definition
* -------- */
const ImpostazioniVerificaFabbisogni = mongoose.model<IImpostazioniVerificaFabbisogni>(
  'ImpostazioniVerificaFabbisogni',
  ImpostazioniVerificaFabbisogniSchema as any
) as mongoose.Model<IImpostazioniVerificaFabbisogni>;

/* --------
* Module Exports
* -------- */
export default ImpostazioniVerificaFabbisogni;

export { ImpostazioniVerificaFabbisogniSchema };

export type TImpostazioniVerificaFabbisogniModel = Omit<typeof ImpostazioniVerificaFabbisogni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IImpostazioniVerificaFabbisogni>): any
};

export type TImpostazioniVerificaFabbisogniDocument = 
& mongoose.Document<any, {}, IImpostazioniVerificaFabbisogni>
& IImpostazioniVerificaFabbisogni;

export { IImpostazioniVerificaFabbisogni };