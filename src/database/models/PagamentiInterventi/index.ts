import * as mongoose from 'mongoose';

import PagamentiInterventiSchema from './PagamentiInterventi.Schema';
import type { IPagamentiInterventi } from './PagamentiInterventi.Types';


/* --------
* Model Definition
* -------- */
const PagamentiInterventi = mongoose.model<IPagamentiInterventi>(
'PagamentiInterventi',
PagamentiInterventiSchema as any
) as mongoose.Model<IPagamentiInterventi>;

/* --------
* Module Exports
* -------- */
export default PagamentiInterventi;

export { PagamentiInterventiSchema };

export type TPagamentiInterventiModel = Omit<typeof PagamentiInterventi, 'traslateAliases'> & {
translateAliases(raw: Partial<IPagamentiInterventi>): any
};

export type TPagamentiInterventiDocument = 
& mongoose.Document<any, {}, IPagamentiInterventi>
& IPagamentiInterventi;

export { IPagamentiInterventi };