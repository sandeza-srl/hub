import * as mongoose from 'mongoose';

import TipiNormativeTipiControlliSchema from './TipiNormativeTipiControlli.Schema';
import type { ITipiNormativeTipiControlli } from './TipiNormativeTipiControlli.Types';


/* --------
* Model Definition
* -------- */
const TipiNormativeTipiControlli = mongoose.model<ITipiNormativeTipiControlli>(
  'TipiNormativeTipiControlli',
  TipiNormativeTipiControlliSchema as any
) as mongoose.Model<ITipiNormativeTipiControlli>;

/* --------
* Module Exports
* -------- */
export default TipiNormativeTipiControlli;

export { TipiNormativeTipiControlliSchema };

export type TTipiNormativeTipiControlliModel = typeof TipiNormativeTipiControlli;

export type TTipiNormativeTipiControlliDocument = 
& mongoose.Document<any, {}, ITipiNormativeTipiControlli>
& ITipiNormativeTipiControlli;

export { ITipiNormativeTipiControlli };