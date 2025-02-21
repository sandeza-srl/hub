import * as mongoose from 'mongoose';

import StrumentiSchema from './Strumenti.Schema';
import type { IStrumenti } from './Strumenti.Types';


/* --------
* Model Definition
* -------- */
const Strumenti = mongoose.model<IStrumenti>(
'Strumenti',
StrumentiSchema as any
) as mongoose.Model<IStrumenti>;

/* --------
* Module Exports
* -------- */
export default Strumenti;

export { StrumentiSchema };

export type TStrumentiModel = Omit<typeof Strumenti, 'traslateAliases'> & {
translateAliases(raw: Partial<IStrumenti>): any
};

export type TStrumentiDocument = 
& mongoose.Document<any, {}, IStrumenti>
& IStrumenti;

export { IStrumenti };