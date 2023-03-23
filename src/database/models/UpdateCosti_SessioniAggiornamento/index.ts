import * as mongoose from 'mongoose';

import UpdateCosti_SessioniAggiornamentoSchema from './UpdateCosti_SessioniAggiornamento.Schema';
import type { IUpdateCosti_SessioniAggiornamento } from './UpdateCosti_SessioniAggiornamento.Types';


/* --------
* Model Definition
* -------- */
const UpdateCosti_SessioniAggiornamento = mongoose.model<IUpdateCosti_SessioniAggiornamento>(
  'UpdateCosti_SessioniAggiornamento',
  UpdateCosti_SessioniAggiornamentoSchema as any
) as mongoose.Model<IUpdateCosti_SessioniAggiornamento>;

/* --------
* Module Exports
* -------- */
export default UpdateCosti_SessioniAggiornamento;

export { UpdateCosti_SessioniAggiornamentoSchema };

export type TUpdateCosti_SessioniAggiornamentoModel = typeof UpdateCosti_SessioniAggiornamento;

export type TUpdateCosti_SessioniAggiornamentoDocument = 
& mongoose.Document<any, {}, IUpdateCosti_SessioniAggiornamento>
& IUpdateCosti_SessioniAggiornamento;

export { IUpdateCosti_SessioniAggiornamento };