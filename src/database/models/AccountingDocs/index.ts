import * as mongoose from 'mongoose';

import AccountingDocsSchema from './AccountingDocs.Schema';
import type { IAccountingDocs } from './AccountingDocs.Types';


/* --------
* Model Definition
* -------- */
const AccountingDocs = mongoose.model<IAccountingDocs>(
'AccountingDocs',
AccountingDocsSchema as any
) as mongoose.Model<IAccountingDocs>;

/* --------
* Module Exports
* -------- */
export default AccountingDocs;

export { AccountingDocsSchema };

export type TAccountingDocsModel = Omit<typeof AccountingDocs, 'traslateAliases'> & {
translateAliases(raw: Partial<IAccountingDocs>): any
};

export type TAccountingDocsDocument = 
& mongoose.Document<any, {}, IAccountingDocs>
& IAccountingDocs;

export { IAccountingDocs };