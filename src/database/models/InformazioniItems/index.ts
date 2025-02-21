import * as mongoose from 'mongoose';

import InformazioniItemsSchema from './InformazioniItems.Schema';
import type { IInformazioniItems } from './InformazioniItems.Types';


/* --------
* Model Definition
* -------- */
const InformazioniItems = mongoose.model<IInformazioniItems>(
'InformazioniItems',
InformazioniItemsSchema as any
) as mongoose.Model<IInformazioniItems>;

/* --------
* Module Exports
* -------- */
export default InformazioniItems;

export { InformazioniItemsSchema };

export type TInformazioniItemsModel = Omit<typeof InformazioniItems, 'traslateAliases'> & {
translateAliases(raw: Partial<IInformazioniItems>): any
};

export type TInformazioniItemsDocument = 
& mongoose.Document<any, {}, IInformazioniItems>
& IInformazioniItems;

export { IInformazioniItems };