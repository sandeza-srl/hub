import * as mongoose from 'mongoose';

import ItemRipartitoriSchema from './ItemRipartitori.Schema';
import type { IItemRipartitori } from './ItemRipartitori.Types';


/* --------
* Model Definition
* -------- */
const ItemRipartitori = mongoose.model<IItemRipartitori>(
  'ItemRipartitori',
  ItemRipartitoriSchema as any
) as mongoose.Model<IItemRipartitori>;

/* --------
* Module Exports
* -------- */
export default ItemRipartitori;

export { ItemRipartitoriSchema };

export type TItemRipartitoriModel = typeof ItemRipartitori;

export type TItemRipartitoriDocument = 
& mongoose.Document<any, {}, IItemRipartitori>
& IItemRipartitori;

export { IItemRipartitori };