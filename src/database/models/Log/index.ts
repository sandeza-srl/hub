import * as mongoose from 'mongoose';

import LogSchema from './Log.Schema';
import type { ILog } from './Log.Types';


/* --------
* Model Definition
* -------- */
const Log = mongoose.model<ILog>(
  'Log',
  LogSchema as any
) as mongoose.Model<ILog>;

/* --------
* Module Exports
* -------- */
export default Log;

export { LogSchema };

export type TLogModel = Omit<typeof Log, 'traslateAliases'> & {
  translateAliases(raw: Partial<ILog>): any
};

export type TLogDocument = 
& mongoose.Document<any, {}, ILog>
& ILog;

export { ILog };