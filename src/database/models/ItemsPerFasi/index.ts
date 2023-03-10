import * as mongoose from 'mongoose';

import ItemsPerFasiSchema from './ItemsPerFasi.Schema';
import type { IItemsPerFasi } from './ItemsPerFasi.Types';


/* --------
* Model Definition
* -------- */
const ItemsPerFasi = mongoose.model<IItemsPerFasi>(
  'ItemsPerFasi',
  ItemsPerFasiSchema as any
) as mongoose.Model<IItemsPerFasi>;

/* --------
* Module Exports
* -------- */
export default ItemsPerFasi;

export { ItemsPerFasiSchema };

export type TItemsPerFasiModel = typeof ItemsPerFasi;

export type TItemsPerFasiDocument = 
& mongoose.Document<any, {}, IItemsPerFasi>
& IItemsPerFasi;

export { IItemsPerFasi };