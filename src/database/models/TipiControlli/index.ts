import * as mongoose from 'mongoose';

import TipiControlliSchema from './TipiControlli.Schema';
import type { ITipiControlli } from './TipiControlli.Types';


/* --------
* Model Definition
* -------- */
const TipiControlli = mongoose.model<ITipiControlli>(
  'TipiControlli',
  TipiControlliSchema as any
) as mongoose.Model<ITipiControlli>;

/* --------
* Module Exports
* -------- */
export default TipiControlli;

export { TipiControlliSchema };

export type TTipiControlliModel = typeof TipiControlli;

export type TTipiControlliDocument = 
& mongoose.Document<any, {}, ITipiControlli>
& ITipiControlli;

export { ITipiControlli };