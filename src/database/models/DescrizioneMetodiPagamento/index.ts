import * as mongoose from 'mongoose';

import DescrizioneMetodiPagamentoSchema from './DescrizioneMetodiPagamento.Schema';
import type { IDescrizioneMetodiPagamento } from './DescrizioneMetodiPagamento.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneMetodiPagamento = mongoose.model<IDescrizioneMetodiPagamento>(
  'DescrizioneMetodiPagamento',
  DescrizioneMetodiPagamentoSchema as any
) as mongoose.Model<IDescrizioneMetodiPagamento>;

/* --------
* Module Exports
* -------- */
export default DescrizioneMetodiPagamento;

export { DescrizioneMetodiPagamentoSchema };

export type TDescrizioneMetodiPagamentoModel = Omit<typeof DescrizioneMetodiPagamento, 'traslateAliases'> & {
  translateAliases(raw: Partial<IDescrizioneMetodiPagamento>): any
};

export type TDescrizioneMetodiPagamentoDocument = 
& mongoose.Document<any, {}, IDescrizioneMetodiPagamento>
& IDescrizioneMetodiPagamento;

export { IDescrizioneMetodiPagamento };