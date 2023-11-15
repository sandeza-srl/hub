import * as mongoose from 'mongoose';

import DescrizioneInformazioniItemsSchema from './DescrizioneInformazioniItems.Schema';
import type { IDescrizioneInformazioniItems } from './DescrizioneInformazioniItems.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneInformazioniItems = mongoose.model<IDescrizioneInformazioniItems>(
  'DescrizioneInformazioniItems',
  DescrizioneInformazioniItemsSchema as any
) as mongoose.Model<IDescrizioneInformazioniItems>;

/* --------
* Module Exports
* -------- */
export default DescrizioneInformazioniItems;

export { DescrizioneInformazioniItemsSchema };

export type TDescrizioneInformazioniItemsModel = Omit<typeof DescrizioneInformazioniItems, 'traslateAliases'> & {
  translateAliases(raw: Partial<IDescrizioneInformazioniItems>): any
};

export type TDescrizioneInformazioniItemsDocument = 
& mongoose.Document<any, {}, IDescrizioneInformazioniItems>
& IDescrizioneInformazioniItems;

export { IDescrizioneInformazioniItems };