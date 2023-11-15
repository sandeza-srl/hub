import * as mongoose from 'mongoose';

import ImpostazioniCruscottoSchema from './ImpostazioniCruscotto.Schema';
import type { IImpostazioniCruscotto } from './ImpostazioniCruscotto.Types';


/* --------
* Model Definition
* -------- */
const ImpostazioniCruscotto = mongoose.model<IImpostazioniCruscotto>(
  'ImpostazioniCruscotto',
  ImpostazioniCruscottoSchema as any
) as mongoose.Model<IImpostazioniCruscotto>;

/* --------
* Module Exports
* -------- */
export default ImpostazioniCruscotto;

export { ImpostazioniCruscottoSchema };

export type TImpostazioniCruscottoModel = Omit<typeof ImpostazioniCruscotto, 'traslateAliases'> & {
  translateAliases(raw: Partial<IImpostazioniCruscotto>): any
};

export type TImpostazioniCruscottoDocument = 
& mongoose.Document<any, {}, IImpostazioniCruscotto>
& IImpostazioniCruscotto;

export { IImpostazioniCruscotto };