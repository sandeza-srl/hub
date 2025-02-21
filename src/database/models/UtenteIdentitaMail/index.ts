import * as mongoose from 'mongoose';

import UtenteIdentitaMailSchema from './UtenteIdentitaMail.Schema';
import type { IUtenteIdentitaMail } from './UtenteIdentitaMail.Types';


/* --------
* Model Definition
* -------- */
const UtenteIdentitaMail = mongoose.model<IUtenteIdentitaMail>(
'UtenteIdentitaMail',
UtenteIdentitaMailSchema as any
) as mongoose.Model<IUtenteIdentitaMail>;

/* --------
* Module Exports
* -------- */
export default UtenteIdentitaMail;

export { UtenteIdentitaMailSchema };

export type TUtenteIdentitaMailModel = Omit<typeof UtenteIdentitaMail, 'traslateAliases'> & {
translateAliases(raw: Partial<IUtenteIdentitaMail>): any
};

export type TUtenteIdentitaMailDocument = 
& mongoose.Document<any, {}, IUtenteIdentitaMail>
& IUtenteIdentitaMail;

export { IUtenteIdentitaMail };