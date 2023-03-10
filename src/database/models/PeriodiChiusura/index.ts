import * as mongoose from 'mongoose';

import PeriodiChiusuraSchema from './PeriodiChiusura.Schema';
import type { IPeriodiChiusura } from './PeriodiChiusura.Types';


/* --------
* Model Definition
* -------- */
const PeriodiChiusura = mongoose.model<IPeriodiChiusura>(
  'PeriodiChiusura',
  PeriodiChiusuraSchema as any
) as mongoose.Model<IPeriodiChiusura>;

/* --------
* Module Exports
* -------- */
export default PeriodiChiusura;

export { PeriodiChiusuraSchema };

export type TPeriodiChiusuraModel = typeof PeriodiChiusura;

export type TPeriodiChiusuraDocument = 
& mongoose.Document<any, {}, IPeriodiChiusura>
& IPeriodiChiusura;

export { IPeriodiChiusura };