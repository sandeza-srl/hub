import * as mongoose from 'mongoose';

import TracciabilitaItemsSchema from './TracciabilitaItems.Schema';
import type { ITracciabilitaItems } from './TracciabilitaItems.Types';


/* --------
* Model Definition
* -------- */
const TracciabilitaItems = mongoose.model<ITracciabilitaItems>(
  'TracciabilitaItems',
  TracciabilitaItemsSchema as any
) as mongoose.Model<ITracciabilitaItems>;

/* --------
* Module Exports
* -------- */
export default TracciabilitaItems;

export { TracciabilitaItemsSchema };

export type TTracciabilitaItemsModel = typeof TracciabilitaItems;

export type TTracciabilitaItemsDocument = 
& mongoose.Document<any, {}, ITracciabilitaItems>
& ITracciabilitaItems;

export { ITracciabilitaItems };