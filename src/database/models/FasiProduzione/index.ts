import * as mongoose from 'mongoose';

import FasiProduzioneSchema from './FasiProduzione.Schema';
import type { IFasiProduzione } from './FasiProduzione.Types';


/* --------
* Model Definition
* -------- */
const FasiProduzione = mongoose.model<IFasiProduzione>(
  'FasiProduzione',
  FasiProduzioneSchema as any
) as mongoose.Model<IFasiProduzione>;

/* --------
* Module Exports
* -------- */
export default FasiProduzione;

export { FasiProduzioneSchema };

export type TFasiProduzioneModel = typeof FasiProduzione;

export type TFasiProduzioneDocument = 
& mongoose.Document<any, {}, IFasiProduzione>
& IFasiProduzione;

export { IFasiProduzione };