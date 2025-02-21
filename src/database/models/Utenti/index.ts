import * as mongoose from 'mongoose';

import UtentiSchema from './Utenti.Schema';
import type { IUtenti } from './Utenti.Types';


/* --------
* Model Definition
* -------- */
const Utenti = mongoose.model<IUtenti>(
'Utenti',
UtentiSchema as any
) as mongoose.Model<IUtenti>;

/* --------
* Module Exports
* -------- */
export default Utenti;

export { UtentiSchema };

export type TUtentiModel = Omit<typeof Utenti, 'traslateAliases'> & {
translateAliases(raw: Partial<IUtenti>): any
};

export type TUtentiDocument = 
& mongoose.Document<any, {}, IUtenti>
& IUtenti;

export { IUtenti };