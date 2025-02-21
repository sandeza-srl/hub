import * as mongoose from 'mongoose';

import SessioneCorrenteSchema from './SessioneCorrente.Schema';
import type { ISessioneCorrente } from './SessioneCorrente.Types';


/* --------
* Model Definition
* -------- */
const SessioneCorrente = mongoose.model<ISessioneCorrente>(
'SessioneCorrente',
SessioneCorrenteSchema as any
) as mongoose.Model<ISessioneCorrente>;

/* --------
* Module Exports
* -------- */
export default SessioneCorrente;

export { SessioneCorrenteSchema };

export type TSessioneCorrenteModel = Omit<typeof SessioneCorrente, 'traslateAliases'> & {
translateAliases(raw: Partial<ISessioneCorrente>): any
};

export type TSessioneCorrenteDocument = 
& mongoose.Document<any, {}, ISessioneCorrente>
& ISessioneCorrente;

export { ISessioneCorrente };