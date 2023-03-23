import * as mongoose from 'mongoose';

import LottiProduzioneSchema from './LottiProduzione.Schema';
import type { ILottiProduzione } from './LottiProduzione.Types';


/* --------
* Model Definition
* -------- */
const LottiProduzione = mongoose.model<ILottiProduzione>(
  'LottiProduzione',
  LottiProduzioneSchema as any
) as mongoose.Model<ILottiProduzione>;

/* --------
* Module Exports
* -------- */
export default LottiProduzione;

export { LottiProduzioneSchema };

export type TLottiProduzioneModel = typeof LottiProduzione;

export type TLottiProduzioneDocument = 
& mongoose.Document<any, {}, ILottiProduzione>
& ILottiProduzione;

export { ILottiProduzione };