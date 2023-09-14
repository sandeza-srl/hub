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

export type TDescrizioniItemsModel = Omit<typeof DescrizioniItems, 'traslateAliases'> & {
  translateAliases(raw: Partial<IDescrizioniItems>): any
};

export type TDescrizioniItemsDocument = 
& mongoose.Document<any, {}, IDescrizioniItems>
& IDescrizioniItems;

export { IDescrizioniItems };