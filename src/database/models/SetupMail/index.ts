import * as mongoose from 'mongoose';

import SetupMailSchema from './SetupMail.Schema';
import type { ISetupMail } from './SetupMail.Types';


/* --------
* Model Definition
* -------- */
const SetupMail = mongoose.model<ISetupMail>(
'SetupMail',
SetupMailSchema as any
) as mongoose.Model<ISetupMail>;

/* --------
* Module Exports
* -------- */
export default SetupMail;

export { SetupMailSchema };

export type TSetupMailModel = Omit<typeof SetupMail, 'traslateAliases'> & {
translateAliases(raw: Partial<ISetupMail>): any
};

export type TSetupMailDocument = 
& mongoose.Document<any, {}, ISetupMail>
& ISetupMail;

export { ISetupMail };