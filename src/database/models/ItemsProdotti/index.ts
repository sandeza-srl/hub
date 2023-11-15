import * as mongoose from 'mongoose';

import ItemsProdottiSchema from './ItemsProdotti.Schema';
import type { IItemsProdotti } from './ItemsProdotti.Types';


/* --------
* Model Definition
* -------- */
const ItemsProdotti = mongoose.model<IItemsProdotti>(
  'ItemsProdotti',
  ItemsProdottiSchema as any
) as mongoose.Model<IItemsProdotti>;

/* --------
* Module Exports
* -------- */
export default ItemsProdotti;

export { ItemsProdottiSchema };

export type TItemsProdottiModel = Omit<typeof ItemsProdotti, 'traslateAliases'> & {
  translateAliases(raw: Partial<IItemsProdotti>): any
};

export type TItemsProdottiDocument = 
& mongoose.Document<any, {}, IItemsProdotti>
& IItemsProdotti;

export { IItemsProdotti };