import * as mongoose from 'mongoose';

import MailStandardSchema from './MailStandard.Schema';
import type { IMailStandard } from './MailStandard.Types';


/* --------
* Model Definition
* -------- */
const MailStandard = mongoose.model<IMailStandard>(
  'MailStandard',
  MailStandardSchema as any
) as mongoose.Model<IMailStandard>;

/* --------
* Module Exports
* -------- */
export default MailStandard;

export { MailStandardSchema };

export type TMailStandardModel = Omit<typeof MailStandard, 'traslateAliases'> & {
  translateAliases(raw: Partial<IMailStandard>): any
};

export type TMailStandardDocument = 
& mongoose.Document<any, {}, IMailStandard>
& IMailStandard;

export { IMailStandard };