import * as mongoose from 'mongoose';

import FamiglieUtensiliSchema from './FamiglieUtensili.Schema';
import type { IFamiglieUtensili } from './FamiglieUtensili.Types';


/* --------
* Model Definition
* -------- */
const FamiglieUtensili = mongoose.model<IFamiglieUtensili>(
  'FamiglieUtensili',
  FamiglieUtensiliSchema as any
) as mongoose.Model<IFamiglieUtensili>;

/* --------
* Module Exports
* -------- */
export default FamiglieUtensili;

export { FamiglieUtensiliSchema };

export type TFamiglieUtensiliModel = typeof FamiglieUtensili;

export type TFamiglieUtensiliDocument = 
& mongoose.Document<any, {}, IFamiglieUtensili>
& IFamiglieUtensili;

export { IFamiglieUtensili };