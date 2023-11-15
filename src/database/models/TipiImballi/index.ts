import * as mongoose from 'mongoose';

import TipiImballiSchema from './TipiImballi.Schema';
import type { ITipiImballi } from './TipiImballi.Types';


/* --------
* Model Definition
* -------- */
const TipiImballi = mongoose.model<ITipiImballi>(
  'TipiImballi',
  TipiImballiSchema as any
) as mongoose.Model<ITipiImballi>;

/* --------
* Module Exports
* -------- */
export default TipiImballi;

export { TipiImballiSchema };

export type TTipiImballiModel = Omit<typeof TipiImballi, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiImballi>): any
};

export type TTipiImballiDocument = 
& mongoose.Document<any, {}, ITipiImballi>
& ITipiImballi;

export { ITipiImballi };