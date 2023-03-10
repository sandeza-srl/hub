import * as mongoose from 'mongoose';

import DescrizioneTipiEtichetteItemsSchema from './DescrizioneTipiEtichetteItems.Schema';
import type { IDescrizioneTipiEtichetteItems } from './DescrizioneTipiEtichetteItems.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneTipiEtichetteItems = mongoose.model<IDescrizioneTipiEtichetteItems>(
  'DescrizioneTipiEtichetteItems',
  DescrizioneTipiEtichetteItemsSchema as any
) as mongoose.Model<IDescrizioneTipiEtichetteItems>;

/* --------
* Module Exports
* -------- */
export default DescrizioneTipiEtichetteItems;

export { DescrizioneTipiEtichetteItemsSchema };

export type TDescrizioneTipiEtichetteItemsModel = typeof DescrizioneTipiEtichetteItems;

export type TDescrizioneTipiEtichetteItemsDocument = 
& mongoose.Document<any, {}, IDescrizioneTipiEtichetteItems>
& IDescrizioneTipiEtichetteItems;

export { IDescrizioneTipiEtichetteItems };