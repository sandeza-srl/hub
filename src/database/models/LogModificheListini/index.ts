import * as mongoose from 'mongoose';

import LogModificheListiniSchema from './LogModificheListini.Schema';
import type { ILogModificheListini } from './LogModificheListini.Types';


/* --------
* Model Definition
* -------- */
const LogModificheListini = mongoose.model<ILogModificheListini>(
  'LogModificheListini',
  LogModificheListiniSchema as any
) as mongoose.Model<ILogModificheListini>;

/* --------
* Module Exports
* -------- */
export default LogModificheListini;

export { LogModificheListiniSchema };

export type TLogModificheListiniModel = Omit<typeof LogModificheListini, 'traslateAliases'> & {
  translateAliases(raw: Partial<ILogModificheListini>): any
};

export type TLogModificheListiniDocument = 
& mongoose.Document<any, {}, ILogModificheListini>
& ILogModificheListini;

export { ILogModificheListini };