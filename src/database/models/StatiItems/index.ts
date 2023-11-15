import * as mongoose from 'mongoose';

import StatiItemsSchema from './StatiItems.Schema';
import type { IStatiItems } from './StatiItems.Types';


/* --------
* Model Definition
* -------- */
const StatiItems = mongoose.model<IStatiItems>(
  'StatiItems',
  StatiItemsSchema as any
) as mongoose.Model<IStatiItems>;

/* --------
* Module Exports
* -------- */
export default StatiItems;

export { StatiItemsSchema };

export type TStatiItemsModel = Omit<typeof StatiItems, 'traslateAliases'> & {
  translateAliases(raw: Partial<IStatiItems>): any
};

export type TStatiItemsDocument = 
& mongoose.Document<any, {}, IStatiItems>
& IStatiItems;

export { IStatiItems };