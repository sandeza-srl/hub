import * as mongoose from 'mongoose';

import SottoFamiglieItemsSchema from './SottoFamiglieItems.Schema';
import type { ISottoFamiglieItems } from './SottoFamiglieItems.Types';


/* --------
* Model Definition
* -------- */
const SottoFamiglieItems = mongoose.model<ISottoFamiglieItems>(
  'SottoFamiglieItems',
  SottoFamiglieItemsSchema as any
) as mongoose.Model<ISottoFamiglieItems>;

/* --------
* Module Exports
* -------- */
export default SottoFamiglieItems;

export { SottoFamiglieItemsSchema };

export type TSottoFamiglieItemsModel = typeof SottoFamiglieItems;

export type TSottoFamiglieItemsDocument = 
& mongoose.Document<any, {}, ISottoFamiglieItems>
& ISottoFamiglieItems;

export { ISottoFamiglieItems };