import * as mongoose from 'mongoose';

import SessioniAppuntamentiSchema from './SessioniAppuntamenti.Schema';
import type { ISessioniAppuntamenti } from './SessioniAppuntamenti.Types';


/* --------
* Model Definition
* -------- */
const SessioniAppuntamenti = mongoose.model<ISessioniAppuntamenti>(
'SessioniAppuntamenti',
SessioniAppuntamentiSchema as any
) as mongoose.Model<ISessioniAppuntamenti>;

/* --------
* Module Exports
* -------- */
export default SessioniAppuntamenti;

export { SessioniAppuntamentiSchema };

export type TSessioniAppuntamentiModel = Omit<typeof SessioniAppuntamenti, 'traslateAliases'> & {
translateAliases(raw: Partial<ISessioniAppuntamenti>): any
};

export type TSessioniAppuntamentiDocument = 
& mongoose.Document<any, {}, ISessioniAppuntamenti>
& ISessioniAppuntamenti;

export { ISessioniAppuntamenti };