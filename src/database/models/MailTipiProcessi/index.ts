import * as mongoose from 'mongoose';

import MailTipiProcessiSchema from './MailTipiProcessi.Schema';
import type { IMailTipiProcessi } from './MailTipiProcessi.Types';


/* --------
* Model Definition
* -------- */
const MailTipiProcessi = mongoose.model<IMailTipiProcessi>(
'MailTipiProcessi',
MailTipiProcessiSchema as any
) as mongoose.Model<IMailTipiProcessi>;

/* --------
* Module Exports
* -------- */
export default MailTipiProcessi;

export { MailTipiProcessiSchema };

export type TMailTipiProcessiModel = Omit<typeof MailTipiProcessi, 'traslateAliases'> & {
translateAliases(raw: Partial<IMailTipiProcessi>): any
};

export type TMailTipiProcessiDocument = 
& mongoose.Document<any, {}, IMailTipiProcessi>
& IMailTipiProcessi;

export { IMailTipiProcessi };