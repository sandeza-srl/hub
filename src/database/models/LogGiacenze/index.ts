import * as mongoose from 'mongoose';

import LogGiacenzeSchema from './LogGiacenze.Schema';
import type { ILogGiacenze } from './LogGiacenze.Types';


/* --------
* Model Definition
* -------- */
const LogGiacenze = mongoose.model<ILogGiacenze>(
  'LogGiacenze',
  LogGiacenzeSchema as any
) as mongoose.Model<ILogGiacenze>;

/* --------
* Module Exports
* -------- */
export default LogGiacenze;

export { LogGiacenzeSchema };

export type TLogGiacenzeModel = Omit<typeof LogGiacenze, 'traslateAliases'> & {
  translateAliases(raw: Partial<ILogGiacenze>): any
};

export type TLogGiacenzeDocument = 
& mongoose.Document<any, {}, ILogGiacenze>
& ILogGiacenze;

export { ILogGiacenze };