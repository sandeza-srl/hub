import * as mongoose from 'mongoose';

import UpdateItemsSchema from './UpdateItems.Schema';
import type { IUpdateItems } from './UpdateItems.Types';


/* --------
* Model Definition
* -------- */
const UpdateItems = mongoose.model<IUpdateItems>(
'UpdateItems',
UpdateItemsSchema as any
) as mongoose.Model<IUpdateItems>;

/* --------
* Module Exports
* -------- */
export default UpdateItems;

export { UpdateItemsSchema };

export type TUpdateItemsModel = Omit<typeof UpdateItems, 'traslateAliases'> & {
translateAliases(raw: Partial<IUpdateItems>): any
};

export type TUpdateItemsDocument = 
& mongoose.Document<any, {}, IUpdateItems>
& IUpdateItems;

export { IUpdateItems };