import * as mongoose from 'mongoose';

import FornitureItemsSchema from './FornitureItems.Schema';
import type { IFornitureItems } from './FornitureItems.Types';


/* --------
* Model Definition
* -------- */
const FornitureItems = mongoose.model<IFornitureItems>(
  'FornitureItems',
  FornitureItemsSchema as any
) as mongoose.Model<IFornitureItems>;

/* --------
* Module Exports
* -------- */
export default FornitureItems;

export { FornitureItemsSchema };

export type TFornitureItemsModel = typeof FornitureItems;

export type TFornitureItemsDocument = 
& mongoose.Document<any, {}, IFornitureItems>
& IFornitureItems;

export { IFornitureItems };