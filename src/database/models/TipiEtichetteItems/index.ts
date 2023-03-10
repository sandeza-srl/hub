import * as mongoose from 'mongoose';

import TipiEtichetteItemsSchema from './TipiEtichetteItems.Schema';
import type { ITipiEtichetteItems } from './TipiEtichetteItems.Types';


/* --------
* Model Definition
* -------- */
const TipiEtichetteItems = mongoose.model<ITipiEtichetteItems>(
  'TipiEtichetteItems',
  TipiEtichetteItemsSchema as any
) as mongoose.Model<ITipiEtichetteItems>;

/* --------
* Module Exports
* -------- */
export default TipiEtichetteItems;

export { TipiEtichetteItemsSchema };

export type TTipiEtichetteItemsModel = typeof TipiEtichetteItems;

export type TTipiEtichetteItemsDocument = 
& mongoose.Document<any, {}, ITipiEtichetteItems>
& ITipiEtichetteItems;

export { ITipiEtichetteItems };