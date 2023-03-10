import * as mongoose from 'mongoose';

import ItemsPerOpzioneProdSchema from './ItemsPerOpzioneProd.Schema';
import type { IItemsPerOpzioneProd } from './ItemsPerOpzioneProd.Types';


/* --------
* Model Definition
* -------- */
const ItemsPerOpzioneProd = mongoose.model<IItemsPerOpzioneProd>(
  'ItemsPerOpzioneProd',
  ItemsPerOpzioneProdSchema as any
) as mongoose.Model<IItemsPerOpzioneProd>;

/* --------
* Module Exports
* -------- */
export default ItemsPerOpzioneProd;

export { ItemsPerOpzioneProdSchema };

export type TItemsPerOpzioneProdModel = typeof ItemsPerOpzioneProd;

export type TItemsPerOpzioneProdDocument = 
& mongoose.Document<any, {}, IItemsPerOpzioneProd>
& IItemsPerOpzioneProd;

export { IItemsPerOpzioneProd };