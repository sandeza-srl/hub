import * as mongoose from 'mongoose';

import AppuntamentiSchema from './Appuntamenti.Schema';
import type { IAppuntamenti } from './Appuntamenti.Types';


/* --------
* Model Definition
* -------- */
const Appuntamenti = mongoose.model<IAppuntamenti>(
'Appuntamenti',
AppuntamentiSchema as any
) as mongoose.Model<IAppuntamenti>;

/* --------
* Module Exports
* -------- */
export default Appuntamenti;

export { AppuntamentiSchema };

export type TAppuntamentiModel = Omit<typeof Appuntamenti, 'traslateAliases'> & {
translateAliases(raw: Partial<IAppuntamenti>): any
};

export type TAppuntamentiDocument = 
& mongoose.Document<any, {}, IAppuntamenti>
& IAppuntamenti;

export { IAppuntamenti };