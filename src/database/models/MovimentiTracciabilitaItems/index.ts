import * as mongoose from 'mongoose';

import MovimentiTracciabilitaItemsSchema from './MovimentiTracciabilitaItems.Schema';
import type { IMovimentiTracciabilitaItems } from './MovimentiTracciabilitaItems.Types';


/* --------
* Model Definition
* -------- */
const MovimentiTracciabilitaItems = mongoose.model<IMovimentiTracciabilitaItems>(
'MovimentiTracciabilitaItems',
MovimentiTracciabilitaItemsSchema as any
) as mongoose.Model<IMovimentiTracciabilitaItems>;

/* --------
* Module Exports
* -------- */
export default MovimentiTracciabilitaItems;

export { MovimentiTracciabilitaItemsSchema };

export type TMovimentiTracciabilitaItemsModel = Omit<typeof MovimentiTracciabilitaItems, 'traslateAliases'> & {
translateAliases(raw: Partial<IMovimentiTracciabilitaItems>): any
};

export type TMovimentiTracciabilitaItemsDocument = 
& mongoose.Document<any, {}, IMovimentiTracciabilitaItems>
& IMovimentiTracciabilitaItems;

export { IMovimentiTracciabilitaItems };