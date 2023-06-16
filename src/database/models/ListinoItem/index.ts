import * as mongoose from 'mongoose';

import ListinoItemSchema from './ListinoItem.Schema';
import type { IListinoItem } from './ListinoItem.Types';


/* --------
* Model Definition
* -------- */
const ListinoItem = mongoose.model<IListinoItem>(
  'ListinoItem',
  ListinoItemSchema as any
) as mongoose.Model<IListinoItem>;

/* --------
* Module Exports
* -------- */
export default ListinoItem;

export { ListinoItemSchema };

export type TListinoItemModel = Omit<typeof ListinoItem, 'traslateAliases'> & {
  translateAliases(raw: Partial<IListinoItem>): any
};

export type TListinoItemDocument =
  & mongoose.Document<any, {}, IListinoItem>
  & IListinoItem;

export { IListinoItem };
