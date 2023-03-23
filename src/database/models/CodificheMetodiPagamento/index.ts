import * as mongoose from 'mongoose';

import CodificheMetodiPagamentoSchema from './CodificheMetodiPagamento.Schema';
import type { ICodificheMetodiPagamento } from './CodificheMetodiPagamento.Types';


/* --------
* Model Definition
* -------- */
const CodificheMetodiPagamento = mongoose.model<ICodificheMetodiPagamento>(
  'CodificheMetodiPagamento',
  CodificheMetodiPagamentoSchema as any
) as mongoose.Model<ICodificheMetodiPagamento>;

/* --------
* Module Exports
* -------- */
export default CodificheMetodiPagamento;

export { CodificheMetodiPagamentoSchema };

export type TCodificheMetodiPagamentoModel = typeof CodificheMetodiPagamento;

export type TCodificheMetodiPagamentoDocument = 
& mongoose.Document<any, {}, ICodificheMetodiPagamento>
& ICodificheMetodiPagamento;

export { ICodificheMetodiPagamento };