import * as mongoose from 'mongoose';

import ImmaginiDescrizioniItemsSchema from './ImmaginiDescrizioniItems.Schema';
import type { IImmaginiDescrizioniItems } from './ImmaginiDescrizioniItems.Types';


/* --------
* Model Definition
* -------- */
const ImmaginiDescrizioniItems = mongoose.model<IImmaginiDescrizioniItems>(
  'ImmaginiDescrizioniItems',
  ImmaginiDescrizioniItemsSchema as any
) as mongoose.Model<IImmaginiDescrizioniItems>;

/* --------
* Module Exports
* -------- */
export default ImmaginiDescrizioniItems;

export { ImmaginiDescrizioniItemsSchema };

export type TImmaginiDescrizioniItemsModel = typeof ImmaginiDescrizioniItems;

export type TImmaginiDescrizioniItemsDocument = 
& mongoose.Document<any, {}, IImmaginiDescrizioniItems>
& IImmaginiDescrizioniItems;

export { IImmaginiDescrizioniItems };