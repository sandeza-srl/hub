import * as mongoose from 'mongoose';

import CodificheTipiDocContabiliSchema from './CodificheTipiDocContabili.Schema';
import type { ICodificheTipiDocContabili } from './CodificheTipiDocContabili.Types';


/* --------
* Model Definition
* -------- */
const CodificheTipiDocContabili = mongoose.model<ICodificheTipiDocContabili>(
  'CodificheTipiDocContabili',
  CodificheTipiDocContabiliSchema as any
) as mongoose.Model<ICodificheTipiDocContabili>;

/* --------
* Module Exports
* -------- */
export default CodificheTipiDocContabili;

export { CodificheTipiDocContabiliSchema };

export type TCodificheTipiDocContabiliModel = typeof CodificheTipiDocContabili;

export type TCodificheTipiDocContabiliDocument = 
& mongoose.Document<any, {}, ICodificheTipiDocContabili>
& ICodificheTipiDocContabili;

export { ICodificheTipiDocContabili };