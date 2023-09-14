import * as mongoose from 'mongoose';

import TipiTagInLinguaSchema from './TipiTagInLingua.Schema';
import type { ITipiTagInLingua } from './TipiTagInLingua.Types';


/* --------
* Model Definition
* -------- */
const TipiTagInLingua = mongoose.model<ITipiTagInLingua>(
  'TipiTagInLingua',
  TipiTagInLinguaSchema as any
) as mongoose.Model<ITipiTagInLingua>;

/* --------
* Module Exports
* -------- */
export default TipiTagInLingua;

export { TipiTagInLinguaSchema };

export type TTipiTagInLinguaModel = Omit<typeof TipiTagInLingua, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiTagInLingua>): any
};

export type TTipiTagInLinguaDocument = 
& mongoose.Document<any, {}, ITipiTagInLingua>
& ITipiTagInLingua;

export { ITipiTagInLingua };