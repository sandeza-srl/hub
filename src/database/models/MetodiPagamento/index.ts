import * as mongoose from 'mongoose';

import MetodiPagamentoSchema from './MetodiPagamento.Schema';
import type { IMetodiPagamento } from './MetodiPagamento.Types';


/* --------
* Model Definition
* -------- */
const MetodiPagamento = mongoose.model<IMetodiPagamento>(
  'MetodiPagamento',
  MetodiPagamentoSchema as any
) as mongoose.Model<IMetodiPagamento>;

/* --------
* Module Exports
* -------- */
export default MetodiPagamento;

export { MetodiPagamentoSchema };

export type TMetodiPagamentoModel = typeof MetodiPagamento;

export type TMetodiPagamentoDocument = 
& mongoose.Document<any, {}, IMetodiPagamento>
& IMetodiPagamento;

export { IMetodiPagamento };