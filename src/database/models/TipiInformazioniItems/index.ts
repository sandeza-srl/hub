import * as mongoose from 'mongoose';

import TipiInformazioniItemsSchema from './TipiInformazioniItems.Schema';
import type { ITipiInformazioniItems } from './TipiInformazioniItems.Types';


/* --------
* Model Definition
* -------- */
const TipiInformazioniItems = mongoose.model<ITipiInformazioniItems>(
'TipiInformazioniItems',
TipiInformazioniItemsSchema as any
) as mongoose.Model<ITipiInformazioniItems>;

/* --------
* Module Exports
* -------- */
export default TipiInformazioniItems;

export { TipiInformazioniItemsSchema };

export type TTipiInformazioniItemsModel = Omit<typeof TipiInformazioniItems, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiInformazioniItems>): any
};

export type TTipiInformazioniItemsDocument = 
& mongoose.Document<any, {}, ITipiInformazioniItems>
& ITipiInformazioniItems;

export { ITipiInformazioniItems };