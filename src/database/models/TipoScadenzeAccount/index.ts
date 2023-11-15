import * as mongoose from 'mongoose';

import TipoScadenzeAccountSchema from './TipoScadenzeAccount.Schema';
import type { ITipoScadenzeAccount } from './TipoScadenzeAccount.Types';


/* --------
* Model Definition
* -------- */
const TipoScadenzeAccount = mongoose.model<ITipoScadenzeAccount>(
  'TipoScadenzeAccount',
  TipoScadenzeAccountSchema as any
) as mongoose.Model<ITipoScadenzeAccount>;

/* --------
* Module Exports
* -------- */
export default TipoScadenzeAccount;

export { TipoScadenzeAccountSchema };

export type TTipoScadenzeAccountModel = Omit<typeof TipoScadenzeAccount, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipoScadenzeAccount>): any
};

export type TTipoScadenzeAccountDocument = 
& mongoose.Document<any, {}, ITipoScadenzeAccount>
& ITipoScadenzeAccount;

export { ITipoScadenzeAccount };