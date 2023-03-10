import * as mongoose from 'mongoose';

import SelezioniItemsSchema from './SelezioniItems.Schema';
import type { ISelezioniItems } from './SelezioniItems.Types';


/* --------
* Model Definition
* -------- */
const SelezioniItems = mongoose.model<ISelezioniItems>(
  'SelezioniItems',
  SelezioniItemsSchema as any
) as mongoose.Model<ISelezioniItems>;

/* --------
* Module Exports
* -------- */
export default SelezioniItems;

export { SelezioniItemsSchema };

export type TSelezioniItemsModel = typeof SelezioniItems;

export type TSelezioniItemsDocument = 
& mongoose.Document<any, {}, ISelezioniItems>
& ISelezioniItems;

export { ISelezioniItems };