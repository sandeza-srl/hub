import * as mongoose from 'mongoose';

import TipiPrimoContattoSchema from './TipiPrimoContatto.Schema';
import type { ITipiPrimoContatto } from './TipiPrimoContatto.Types';


/* --------
* Model Definition
* -------- */
const TipiPrimoContatto = mongoose.model<ITipiPrimoContatto>(
  'TipiPrimoContatto',
  TipiPrimoContattoSchema as any
) as mongoose.Model<ITipiPrimoContatto>;

/* --------
* Module Exports
* -------- */
export default TipiPrimoContatto;

export { TipiPrimoContattoSchema };

export type TTipiPrimoContattoModel = Omit<typeof TipiPrimoContatto, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiPrimoContatto>): any
};

export type TTipiPrimoContattoDocument = 
& mongoose.Document<any, {}, ITipiPrimoContatto>
& ITipiPrimoContatto;

export { ITipiPrimoContatto };