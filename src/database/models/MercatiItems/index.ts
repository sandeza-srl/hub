import * as mongoose from 'mongoose';

import MercatiItemsSchema from './MercatiItems.Schema';
import type { IMercatiItems } from './MercatiItems.Types';


/* --------
* Model Definition
* -------- */
const MercatiItems = mongoose.model<IMercatiItems>(
'MercatiItems',
MercatiItemsSchema as any
) as mongoose.Model<IMercatiItems>;

/* --------
* Module Exports
* -------- */
export default MercatiItems;

export { MercatiItemsSchema };

export type TMercatiItemsModel = Omit<typeof MercatiItems, 'traslateAliases'> & {
translateAliases(raw: Partial<IMercatiItems>): any
};

export type TMercatiItemsDocument = 
& mongoose.Document<any, {}, IMercatiItems>
& IMercatiItems;

export { IMercatiItems };