import * as mongoose from 'mongoose';

import OpzioniProdSchema from './OpzioniProd.Schema';
import type { IOpzioniProd } from './OpzioniProd.Types';


/* --------
* Model Definition
* -------- */
const OpzioniProd = mongoose.model<IOpzioniProd>(
  'OpzioniProd',
  OpzioniProdSchema as any
) as mongoose.Model<IOpzioniProd>;

/* --------
* Module Exports
* -------- */
export default OpzioniProd;

export { OpzioniProdSchema };

export type TOpzioniProdModel = typeof OpzioniProd;

export type TOpzioniProdDocument = 
& mongoose.Document<any, {}, IOpzioniProd>
& IOpzioniProd;

export { IOpzioniProd };