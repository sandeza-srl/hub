import * as mongoose from 'mongoose';

import LogCostiRisorseSchema from './LogCostiRisorse.Schema';
import type { ILogCostiRisorse } from './LogCostiRisorse.Types';


/* --------
* Model Definition
* -------- */
const LogCostiRisorse = mongoose.model<ILogCostiRisorse>(
'LogCostiRisorse',
LogCostiRisorseSchema as any
) as mongoose.Model<ILogCostiRisorse>;

/* --------
* Module Exports
* -------- */
export default LogCostiRisorse;

export { LogCostiRisorseSchema };

export type TLogCostiRisorseModel = Omit<typeof LogCostiRisorse, 'traslateAliases'> & {
translateAliases(raw: Partial<ILogCostiRisorse>): any
};

export type TLogCostiRisorseDocument = 
& mongoose.Document<any, {}, ILogCostiRisorse>
& ILogCostiRisorse;

export { ILogCostiRisorse };