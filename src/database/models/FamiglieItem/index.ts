import * as mongoose from 'mongoose';

import FamiglieItemSchema from './FamiglieItem.Schema';
import type { IFamiglieItem } from './FamiglieItem.Types';


/* --------
* Model Definition
* -------- */
const FamiglieItem = mongoose.model<IFamiglieItem>(
  'FamiglieItem',
  FamiglieItemSchema as any
) as mongoose.Model<IFamiglieItem>;

/* --------
* Module Exports
* -------- */
export default FamiglieItem;

export { FamiglieItemSchema };

export type TFamiglieItemModel = Omit<typeof FamiglieItem, 'traslateAliases'> & {
  translateAliases(raw: Partial<IFamiglieItem>): any
};

export type TFamiglieItemDocument =
  & mongoose.Document<any, {}, IFamiglieItem>
  & IFamiglieItem;

export { IFamiglieItem };
