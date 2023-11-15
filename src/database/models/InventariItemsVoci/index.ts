import * as mongoose from 'mongoose';

import InventariItemsVociSchema from './InventariItemsVoci.Schema';
import type { IInventariItemsVoci } from './InventariItemsVoci.Types';


/* --------
* Model Definition
* -------- */
const InventariItemsVoci = mongoose.model<IInventariItemsVoci>(
  'InventariItemsVoci',
  InventariItemsVociSchema as any
) as mongoose.Model<IInventariItemsVoci>;

/* --------
* Module Exports
* -------- */
export default InventariItemsVoci;

export { InventariItemsVociSchema };

export type TInventariItemsVociModel = Omit<typeof InventariItemsVoci, 'traslateAliases'> & {
  translateAliases(raw: Partial<IInventariItemsVoci>): any
};

export type TInventariItemsVociDocument = 
& mongoose.Document<any, {}, IInventariItemsVoci>
& IInventariItemsVoci;

export { IInventariItemsVoci };