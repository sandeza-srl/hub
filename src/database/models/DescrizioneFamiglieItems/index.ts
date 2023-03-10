import * as mongoose from 'mongoose';

import DescrizioneFamiglieItemsSchema from './DescrizioneFamiglieItems.Schema';
import type { IDescrizioneFamiglieItems } from './DescrizioneFamiglieItems.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneFamiglieItems = mongoose.model<IDescrizioneFamiglieItems>(
  'DescrizioneFamiglieItems',
  DescrizioneFamiglieItemsSchema as any
) as mongoose.Model<IDescrizioneFamiglieItems>;

/* --------
* Module Exports
* -------- */
export default DescrizioneFamiglieItems;

export { DescrizioneFamiglieItemsSchema };

export type TDescrizioneFamiglieItemsModel = typeof DescrizioneFamiglieItems;

export type TDescrizioneFamiglieItemsDocument = 
& mongoose.Document<any, {}, IDescrizioneFamiglieItems>
& IDescrizioneFamiglieItems;

export { IDescrizioneFamiglieItems };