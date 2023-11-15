import * as mongoose from 'mongoose';

import StoricoStatiItemsSchema from './StoricoStatiItems.Schema';
import type { IStoricoStatiItems } from './StoricoStatiItems.Types';


/* --------
* Model Definition
* -------- */
const StoricoStatiItems = mongoose.model<IStoricoStatiItems>(
  'StoricoStatiItems',
  StoricoStatiItemsSchema as any
) as mongoose.Model<IStoricoStatiItems>;

/* --------
* Module Exports
* -------- */
export default StoricoStatiItems;

export { StoricoStatiItemsSchema };

export type TStoricoStatiItemsModel = Omit<typeof StoricoStatiItems, 'traslateAliases'> & {
  translateAliases(raw: Partial<IStoricoStatiItems>): any
};

export type TStoricoStatiItemsDocument = 
& mongoose.Document<any, {}, IStoricoStatiItems>
& IStoricoStatiItems;

export { IStoricoStatiItems };