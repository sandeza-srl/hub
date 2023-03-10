import * as mongoose from 'mongoose';

import TipiNormativeSchema from './TipiNormative.Schema';
import type { ITipiNormative } from './TipiNormative.Types';


/* --------
* Model Definition
* -------- */
const TipiNormative = mongoose.model<ITipiNormative>(
  'TipiNormative',
  TipiNormativeSchema as any
) as mongoose.Model<ITipiNormative>;

/* --------
* Module Exports
* -------- */
export default TipiNormative;

export { TipiNormativeSchema };

export type TTipiNormativeModel = typeof TipiNormative;

export type TTipiNormativeDocument = 
& mongoose.Document<any, {}, ITipiNormative>
& ITipiNormative;

export { ITipiNormative };