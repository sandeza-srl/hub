import * as mongoose from 'mongoose';

import ItemsSchema from './Items.Schema';
import type { IItems } from './Items.Types';


/* --------
* Model Definition
* -------- */
const Items = mongoose.model<IItems>(
  'Items',
  ItemsSchema as any
) as mongoose.Model<IItems>;

/* --------
* Module Exports
* -------- */
export default Items;

export { ItemsSchema };

export type TItemsModel = Omit<typeof Items, 'traslateAliases'> & {
  translateAliases(raw: Partial<IItems>): any
};

export type TItemsDocument =
  & mongoose.Document<any, {}, IItems>
  & IItems;

export { IItems };
