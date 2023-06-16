import * as mongoose from 'mongoose';

import ItemsUnitaMisuraAlternativeSchema from './ItemsUnitaMisuraAlternative.Schema';
import type { IItemsUnitaMisuraAlternative } from './ItemsUnitaMisuraAlternative.Types';


/* --------
* Model Definition
* -------- */
const ItemsUnitaMisuraAlternative = mongoose.model<IItemsUnitaMisuraAlternative>(
  'ItemsUnitaMisuraAlternative',
  ItemsUnitaMisuraAlternativeSchema as any
) as mongoose.Model<IItemsUnitaMisuraAlternative>;

/* --------
* Module Exports
* -------- */
export default ItemsUnitaMisuraAlternative;

export { ItemsUnitaMisuraAlternativeSchema };

export type TItemsUnitaMisuraAlternativeModel = Omit<typeof ItemsUnitaMisuraAlternative, 'traslateAliases'> & {
  translateAliases(raw: Partial<IItemsUnitaMisuraAlternative>): any
};

export type TItemsUnitaMisuraAlternativeDocument =
  & mongoose.Document<any, {}, IItemsUnitaMisuraAlternative>
  & IItemsUnitaMisuraAlternative;

export { IItemsUnitaMisuraAlternative };
