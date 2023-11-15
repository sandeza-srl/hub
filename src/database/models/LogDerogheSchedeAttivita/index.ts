import * as mongoose from 'mongoose';

import LogDerogheSchedeAttivitaSchema from './LogDerogheSchedeAttivita.Schema';
import type { ILogDerogheSchedeAttivita } from './LogDerogheSchedeAttivita.Types';


/* --------
* Model Definition
* -------- */
const LogDerogheSchedeAttivita = mongoose.model<ILogDerogheSchedeAttivita>(
  'LogDerogheSchedeAttivita',
  LogDerogheSchedeAttivitaSchema as any
) as mongoose.Model<ILogDerogheSchedeAttivita>;

/* --------
* Module Exports
* -------- */
export default LogDerogheSchedeAttivita;

export { LogDerogheSchedeAttivitaSchema };

export type TLogDerogheSchedeAttivitaModel = Omit<typeof LogDerogheSchedeAttivita, 'traslateAliases'> & {
  translateAliases(raw: Partial<ILogDerogheSchedeAttivita>): any
};

export type TLogDerogheSchedeAttivitaDocument = 
& mongoose.Document<any, {}, ILogDerogheSchedeAttivita>
& ILogDerogheSchedeAttivita;

export { ILogDerogheSchedeAttivita };