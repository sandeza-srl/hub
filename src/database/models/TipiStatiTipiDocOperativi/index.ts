import * as mongoose from 'mongoose';

import TipiStatiTipiDocOperativiSchema from './TipiStatiTipiDocOperativi.Schema';
import type { ITipiStatiTipiDocOperativi } from './TipiStatiTipiDocOperativi.Types';


/* --------
* Model Definition
* -------- */
const TipiStatiTipiDocOperativi = mongoose.model<ITipiStatiTipiDocOperativi>(
  'TipiStatiTipiDocOperativi',
  TipiStatiTipiDocOperativiSchema as any
) as mongoose.Model<ITipiStatiTipiDocOperativi>;

/* --------
* Module Exports
* -------- */
export default TipiStatiTipiDocOperativi;

export { TipiStatiTipiDocOperativiSchema };

export type TTipiStatiTipiDocOperativiModel = typeof TipiStatiTipiDocOperativi;

export type TTipiStatiTipiDocOperativiDocument = 
& mongoose.Document<any, {}, ITipiStatiTipiDocOperativi>
& ITipiStatiTipiDocOperativi;

export { ITipiStatiTipiDocOperativi };