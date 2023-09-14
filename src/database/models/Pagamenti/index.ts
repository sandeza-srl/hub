import * as mongoose from 'mongoose';

import PagamentiSchema from './Pagamenti.Schema';
import type { IPagamenti } from './Pagamenti.Types';


/* --------
* Model Definition
* -------- */
const Pagamenti = mongoose.model<IPagamenti>(
  'Pagamenti',
  PagamentiSchema as any
) as mongoose.Model<IPagamenti>;

/* --------
* Module Exports
* -------- */
export default Pagamenti;

export { PagamentiSchema };

export type TPagamentiModel = Omit<typeof Pagamenti, 'traslateAliases'> & {
  translateAliases(raw: Partial<IPagamenti>): any
};

export type TPagamentiDocument = 
& mongoose.Document<any, {}, IPagamenti>
& IPagamenti;

export { IPagamenti };