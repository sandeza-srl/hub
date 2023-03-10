import * as mongoose from 'mongoose';

import ArticoliSchema from './Articoli.Schema';
import type { IArticoli } from './Articoli.Types';


/* --------
* Model Definition
* -------- */
const Articoli = mongoose.model<IArticoli>(
  'Articoli',
  ArticoliSchema as any
) as mongoose.Model<IArticoli>;

/* --------
* Module Exports
* -------- */
export default Articoli;

export { ArticoliSchema };

export type TArticoliModel = typeof Articoli;

export type TArticoliDocument = 
& mongoose.Document<any, {}, IArticoli>
& IArticoli;

export { IArticoli };