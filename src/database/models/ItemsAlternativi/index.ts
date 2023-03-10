import * as mongoose from 'mongoose';

import ItemsAlternativiSchema from './ItemsAlternativi.Schema';
import type { IItemsAlternativi } from './ItemsAlternativi.Types';


/* --------
* Model Definition
* -------- */
const ItemsAlternativi = mongoose.model<IItemsAlternativi>(
  'ItemsAlternativi',
  ItemsAlternativiSchema as any
) as mongoose.Model<IItemsAlternativi>;

/* --------
* Module Exports
* -------- */
export default ItemsAlternativi;

export { ItemsAlternativiSchema };

export type TItemsAlternativiModel = typeof ItemsAlternativi;

export type TItemsAlternativiDocument = 
& mongoose.Document<any, {}, IItemsAlternativi>
& IItemsAlternativi;

export { IItemsAlternativi };