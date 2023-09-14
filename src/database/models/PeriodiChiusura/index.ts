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

export type TPeriodiChiusuraModel = Omit<typeof PeriodiChiusura, 'traslateAliases'> & {
  translateAliases(raw: Partial<IPeriodiChiusura>): any
};

export type TPeriodiChiusuraDocument = 
& mongoose.Document<any, {}, IPeriodiChiusura>
& IPeriodiChiusura;

export { IPeriodiChiusura };