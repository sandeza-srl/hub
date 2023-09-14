import * as mongoose from 'mongoose';

import ValoriTipiEtichetteItemsSchema from './ValoriTipiEtichetteItems.Schema';
import type { IValoriTipiEtichetteItems } from './ValoriTipiEtichetteItems.Types';


/* --------
* Model Definition
* -------- */
const ValoriTipiEtichetteItems = mongoose.model<IValoriTipiEtichetteItems>(
  'ValoriTipiEtichetteItems',
  ValoriTipiEtichetteItemsSchema as any
) as mongoose.Model<IValoriTipiEtichetteItems>;

/* --------
* Module Exports
* -------- */
export default ValoriTipiEtichetteItems;

export { ValoriTipiEtichetteItemsSchema };

export type TValoriTipiEtichetteItemsModel = Omit<typeof ValoriTipiEtichetteItems, 'traslateAliases'> & {
  translateAliases(raw: Partial<IValoriTipiEtichetteItems>): any
};

export type TValoriTipiEtichetteItemsDocument = 
& mongoose.Document<any, {}, IValoriTipiEtichetteItems>
& IValoriTipiEtichetteItems;

export { IValoriTipiEtichetteItems };