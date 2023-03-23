import * as mongoose from 'mongoose';

import TipiUtensiliSchema from './TipiUtensili.Schema';
import type { ITipiUtensili } from './TipiUtensili.Types';


/* --------
* Model Definition
* -------- */
const TipiUtensili = mongoose.model<ITipiUtensili>(
  'TipiUtensili',
  TipiUtensiliSchema as any
) as mongoose.Model<ITipiUtensili>;

/* --------
* Module Exports
* -------- */
export default TipiUtensili;

export { TipiUtensiliSchema };

export type TTipiUtensiliModel = typeof TipiUtensili;

export type TTipiUtensiliDocument = 
& mongoose.Document<any, {}, ITipiUtensili>
& ITipiUtensili;

export { ITipiUtensili };