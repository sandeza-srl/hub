import * as mongoose from 'mongoose';

import SottoprodottiPerItemSchema from './SottoprodottiPerItem.Schema';
import type { ISottoprodottiPerItem } from './SottoprodottiPerItem.Types';


/* --------
* Model Definition
* -------- */
const SottoprodottiPerItem = mongoose.model<ISottoprodottiPerItem>(
'SottoprodottiPerItem',
SottoprodottiPerItemSchema as any
) as mongoose.Model<ISottoprodottiPerItem>;

/* --------
* Module Exports
* -------- */
export default SottoprodottiPerItem;

export { SottoprodottiPerItemSchema };

export type TSottoprodottiPerItemModel = Omit<typeof SottoprodottiPerItem, 'traslateAliases'> & {
translateAliases(raw: Partial<ISottoprodottiPerItem>): any
};

export type TSottoprodottiPerItemDocument = 
& mongoose.Document<any, {}, ISottoprodottiPerItem>
& ISottoprodottiPerItem;

export { ISottoprodottiPerItem };