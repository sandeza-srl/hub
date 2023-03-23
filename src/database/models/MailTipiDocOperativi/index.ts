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

export type TMailTipiDocOperativiModel = typeof MailTipiDocOperativi;

export type TMailTipiDocOperativiDocument = 
& mongoose.Document<any, {}, IMailTipiDocOperativi>
& IMailTipiDocOperativi;

export { IMailTipiDocOperativi };