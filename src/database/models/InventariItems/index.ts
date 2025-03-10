import * as mongoose from 'mongoose';

import InventariItemsSchema from './InventariItems.Schema';
import type { IInventariItems } from './InventariItems.Types';


/* --------
* Model Definition
* -------- */
const InventariItems = mongoose.model<IInventariItems>(
'InventariItems',
InventariItemsSchema as any
) as mongoose.Model<IInventariItems>;

/* --------
* Module Exports
* -------- */
export default InventariItems;

export { InventariItemsSchema };

export type TInventariItemsModel = Omit<typeof InventariItems, 'traslateAliases'> & {
translateAliases(raw: Partial<IInventariItems>): any
};

export type TInventariItemsDocument = 
& mongoose.Document<any, {}, IInventariItems>
& IInventariItems;

export { IInventariItems };