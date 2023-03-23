import * as mongoose from 'mongoose';

import TipiDocContabiliSchema from './TipiDocContabili.Schema';
import type { ITipiDocContabili } from './TipiDocContabili.Types';


/* --------
* Model Definition
* -------- */
const TipiDocContabili = mongoose.model<ITipiDocContabili>(
  'TipiDocContabili',
  TipiDocContabiliSchema as any
) as mongoose.Model<ITipiDocContabili>;

/* --------
* Module Exports
* -------- */
export default TipiDocContabili;

export { TipiDocContabiliSchema };

export type TTipiDocContabiliModel = typeof TipiDocContabili;

export type TTipiDocContabiliDocument = 
& mongoose.Document<any, {}, ITipiDocContabili>
& ITipiDocContabili;

export { ITipiDocContabili };