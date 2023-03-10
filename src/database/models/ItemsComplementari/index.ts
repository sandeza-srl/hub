import * as mongoose from 'mongoose';

import ItemsComplementariSchema from './ItemsComplementari.Schema';
import type { IItemsComplementari } from './ItemsComplementari.Types';


/* --------
* Model Definition
* -------- */
const ItemsComplementari = mongoose.model<IItemsComplementari>(
  'ItemsComplementari',
  ItemsComplementariSchema as any
) as mongoose.Model<IItemsComplementari>;

/* --------
* Module Exports
* -------- */
export default ItemsComplementari;

export { ItemsComplementariSchema };

export type TItemsComplementariModel = typeof ItemsComplementari;

export type TItemsComplementariDocument = 
& mongoose.Document<any, {}, IItemsComplementari>
& IItemsComplementari;

export { IItemsComplementari };