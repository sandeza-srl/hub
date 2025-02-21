import * as mongoose from 'mongoose';

import LuoghiItemSchema from './LuoghiItem.Schema';
import type { ILuoghiItem } from './LuoghiItem.Types';


/* --------
* Model Definition
* -------- */
const LuoghiItem = mongoose.model<ILuoghiItem>(
'LuoghiItem',
LuoghiItemSchema as any
) as mongoose.Model<ILuoghiItem>;

/* --------
* Module Exports
* -------- */
export default LuoghiItem;

export { LuoghiItemSchema };

export type TLuoghiItemModel = Omit<typeof LuoghiItem, 'traslateAliases'> & {
translateAliases(raw: Partial<ILuoghiItem>): any
};

export type TLuoghiItemDocument = 
& mongoose.Document<any, {}, ILuoghiItem>
& ILuoghiItem;

export { ILuoghiItem };