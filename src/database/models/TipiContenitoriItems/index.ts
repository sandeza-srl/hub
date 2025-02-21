import * as mongoose from 'mongoose';

import TipiContenitoriItemsSchema from './TipiContenitoriItems.Schema';
import type { ITipiContenitoriItems } from './TipiContenitoriItems.Types';


/* --------
* Model Definition
* -------- */
const TipiContenitoriItems = mongoose.model<ITipiContenitoriItems>(
'TipiContenitoriItems',
TipiContenitoriItemsSchema as any
) as mongoose.Model<ITipiContenitoriItems>;

/* --------
* Module Exports
* -------- */
export default TipiContenitoriItems;

export { TipiContenitoriItemsSchema };

export type TTipiContenitoriItemsModel = Omit<typeof TipiContenitoriItems, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiContenitoriItems>): any
};

export type TTipiContenitoriItemsDocument = 
& mongoose.Document<any, {}, ITipiContenitoriItems>
& ITipiContenitoriItems;

export { ITipiContenitoriItems };