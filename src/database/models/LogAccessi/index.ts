import * as mongoose from 'mongoose';

import LogAccessiSchema from './LogAccessi.Schema';
import type { ILogAccessi } from './LogAccessi.Types';


/* --------
* Model Definition
* -------- */
const LogAccessi = mongoose.model<ILogAccessi>(
'LogAccessi',
LogAccessiSchema as any
) as mongoose.Model<ILogAccessi>;

/* --------
* Module Exports
* -------- */
export default LogAccessi;

export { LogAccessiSchema };

export type TLogAccessiModel = Omit<typeof LogAccessi, 'traslateAliases'> & {
translateAliases(raw: Partial<ILogAccessi>): any
};

export type TLogAccessiDocument = 
& mongoose.Document<any, {}, ILogAccessi>
& ILogAccessi;

export { ILogAccessi };