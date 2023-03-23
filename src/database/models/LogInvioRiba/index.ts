import * as mongoose from 'mongoose';

import LogInvioRibaSchema from './LogInvioRiba.Schema';
import type { ILogInvioRiba } from './LogInvioRiba.Types';


/* --------
* Model Definition
* -------- */
const LogInvioRiba = mongoose.model<ILogInvioRiba>(
  'LogInvioRiba',
  LogInvioRibaSchema as any
) as mongoose.Model<ILogInvioRiba>;

/* --------
* Module Exports
* -------- */
export default LogInvioRiba;

export { LogInvioRibaSchema };

export type TLogInvioRibaModel = typeof LogInvioRiba;

export type TLogInvioRibaDocument = 
& mongoose.Document<any, {}, ILogInvioRiba>
& ILogInvioRiba;

export { ILogInvioRiba };