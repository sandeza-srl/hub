import * as mongoose from 'mongoose';

import PosizioniRiservateItemSchema from './PosizioniRiservateItem.Schema';
import type { IPosizioniRiservateItem } from './PosizioniRiservateItem.Types';


/* --------
* Model Definition
* -------- */
const PosizioniRiservateItem = mongoose.model<IPosizioniRiservateItem>(
  'PosizioniRiservateItem',
  PosizioniRiservateItemSchema as any
) as mongoose.Model<IPosizioniRiservateItem>;

/* --------
* Module Exports
* -------- */
export default PosizioniRiservateItem;

export { PosizioniRiservateItemSchema };

export type TPosizioniRiservateItemModel = Omit<typeof PosizioniRiservateItem, 'traslateAliases'> & {
  translateAliases(raw: Partial<IPosizioniRiservateItem>): any
};

export type TPosizioniRiservateItemDocument = 
& mongoose.Document<any, {}, IPosizioniRiservateItem>
& IPosizioniRiservateItem;

export { IPosizioniRiservateItem };