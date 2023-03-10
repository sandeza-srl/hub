import * as mongoose from 'mongoose';

import TipiDocOperativiSchema from './TipiDocOperativi.Schema';
import type { ITipiDocOperativi } from './TipiDocOperativi.Types';


/* --------
* Model Definition
* -------- */
const TipiDocOperativi = mongoose.model<ITipiDocOperativi>(
  'TipiDocOperativi',
  TipiDocOperativiSchema as any
) as mongoose.Model<ITipiDocOperativi>;

/* --------
* Module Exports
* -------- */
export default TipiDocOperativi;

export { TipiDocOperativiSchema };

export type TTipiDocOperativiModel = typeof TipiDocOperativi;

export type TTipiDocOperativiDocument = 
& mongoose.Document<any, {}, ITipiDocOperativi>
& ITipiDocOperativi;

export { ITipiDocOperativi };