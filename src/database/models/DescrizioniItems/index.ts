import * as mongoose from 'mongoose';

import DescrizioniItemsSchema from './DescrizioniItems.Schema';
import type { IDescrizioniItems } from './DescrizioniItems.Types';


/* --------
* Model Definition
* -------- */
const DescrizioniItems = mongoose.model<IDescrizioniItems>(
  'DescrizioniItems',
  DescrizioniItemsSchema as any
) as mongoose.Model<IDescrizioniItems>;

/* --------
* Module Exports
* -------- */
export default DescrizioniItems;

export { DescrizioniItemsSchema };

export type TDescrizioniItemsModel = typeof DescrizioniItems;

export type TDescrizioniItemsDocument = 
& mongoose.Document<any, {}, IDescrizioniItems>
& IDescrizioniItems;

export { IDescrizioniItems };