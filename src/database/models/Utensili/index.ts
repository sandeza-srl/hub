import * as mongoose from 'mongoose';

import UtensiliSchema from './Utensili.Schema';
import type { IUtensili } from './Utensili.Types';


/* --------
* Model Definition
* -------- */
const Utensili = mongoose.model<IUtensili>(
  'Utensili',
  UtensiliSchema as any
) as mongoose.Model<IUtensili>;

/* --------
* Module Exports
* -------- */
export default Utensili;

export { UtensiliSchema };

export type TUtensiliModel = typeof Utensili;

export type TUtensiliDocument = 
& mongoose.Document<any, {}, IUtensili>
& IUtensili;

export { IUtensili };