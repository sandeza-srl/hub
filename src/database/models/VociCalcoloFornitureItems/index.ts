import * as mongoose from 'mongoose';

import VociCalcoloFornitureItemsSchema from './VociCalcoloFornitureItems.Schema';
import type { IVociCalcoloFornitureItems } from './VociCalcoloFornitureItems.Types';


/* --------
* Model Definition
* -------- */
const VociCalcoloFornitureItems = mongoose.model<IVociCalcoloFornitureItems>(
'VociCalcoloFornitureItems',
VociCalcoloFornitureItemsSchema as any
) as mongoose.Model<IVociCalcoloFornitureItems>;

/* --------
* Module Exports
* -------- */
export default VociCalcoloFornitureItems;

export { VociCalcoloFornitureItemsSchema };

export type TVociCalcoloFornitureItemsModel = Omit<typeof VociCalcoloFornitureItems, 'traslateAliases'> & {
translateAliases(raw: Partial<IVociCalcoloFornitureItems>): any
};

export type TVociCalcoloFornitureItemsDocument = 
& mongoose.Document<any, {}, IVociCalcoloFornitureItems>
& IVociCalcoloFornitureItems;

export { IVociCalcoloFornitureItems };