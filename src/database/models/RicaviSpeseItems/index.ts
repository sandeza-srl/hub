import * as mongoose from 'mongoose';

import RicaviSpeseItemsSchema from './RicaviSpeseItems.Schema';
import type { IRicaviSpeseItems } from './RicaviSpeseItems.Types';


/* --------
* Model Definition
* -------- */
const RicaviSpeseItems = mongoose.model<IRicaviSpeseItems>(
  'RicaviSpeseItems',
  RicaviSpeseItemsSchema as any
) as mongoose.Model<IRicaviSpeseItems>;

/* --------
* Module Exports
* -------- */
export default RicaviSpeseItems;

export { RicaviSpeseItemsSchema };

export type TRicaviSpeseItemsModel = Omit<typeof RicaviSpeseItems, 'traslateAliases'> & {
  translateAliases(raw: Partial<IRicaviSpeseItems>): any
};

export type TRicaviSpeseItemsDocument = 
& mongoose.Document<any, {}, IRicaviSpeseItems>
& IRicaviSpeseItems;

export { IRicaviSpeseItems };