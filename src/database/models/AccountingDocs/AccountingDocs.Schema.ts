import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IAccountingDocsPrivate } from './AccountingDocs.Types.Private';


/* --------
* Schema Definition
* -------- */
const AccountingDocsSchema = new mongoose.Schema<IAccountingDocsPrivate>({

_id: {
type: String,
default: uuid.v4
},

}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AccountingDocsSchema;