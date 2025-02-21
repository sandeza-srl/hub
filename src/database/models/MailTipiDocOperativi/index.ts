import * as mongoose from 'mongoose';

import MailTipiDocOperativiSchema from './MailTipiDocOperativi.Schema';
import type { IMailTipiDocOperativi } from './MailTipiDocOperativi.Types';


/* --------
* Model Definition
* -------- */
const MailTipiDocOperativi = mongoose.model<IMailTipiDocOperativi>(
'MailTipiDocOperativi',
MailTipiDocOperativiSchema as any
) as mongoose.Model<IMailTipiDocOperativi>;

/* --------
* Module Exports
* -------- */
export default MailTipiDocOperativi;

export { MailTipiDocOperativiSchema };

export type TMailTipiDocOperativiModel = Omit<typeof MailTipiDocOperativi, 'traslateAliases'> & {
translateAliases(raw: Partial<IMailTipiDocOperativi>): any
};

export type TMailTipiDocOperativiDocument = 
& mongoose.Document<any, {}, IMailTipiDocOperativi>
& IMailTipiDocOperativi;

export { IMailTipiDocOperativi };