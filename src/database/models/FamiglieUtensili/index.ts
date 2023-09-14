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

export type TFamiglieUtensiliModel = Omit<typeof FamiglieUtensili, 'traslateAliases'> & {
  translateAliases(raw: Partial<IFamiglieUtensili>): any
};

export type TFamiglieUtensiliDocument = 
& mongoose.Document<any, {}, IFamiglieUtensili>
& IFamiglieUtensili;

export { IFamiglieUtensili };