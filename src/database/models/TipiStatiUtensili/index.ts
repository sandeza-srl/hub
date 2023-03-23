import * as mongoose from 'mongoose';

import TipiStatiUtensiliSchema from './TipiStatiUtensili.Schema';
import type { ITipiStatiUtensili } from './TipiStatiUtensili.Types';


/* --------
* Model Definition
* -------- */
const TipiStatiUtensili = mongoose.model<ITipiStatiUtensili>(
  'TipiStatiUtensili',
  TipiStatiUtensiliSchema as any
) as mongoose.Model<ITipiStatiUtensili>;

/* --------
* Module Exports
* -------- */
export default TipiStatiUtensili;

export { TipiStatiUtensiliSchema };

export type TTipiStatiUtensiliModel = typeof TipiStatiUtensili;

export type TTipiStatiUtensiliDocument = 
& mongoose.Document<any, {}, ITipiStatiUtensili>
& ITipiStatiUtensili;

export { ITipiStatiUtensili };