import * as mongoose from 'mongoose';

import P_FasiProduzioneSchema from './P_FasiProduzione.Schema';
import type { IP_FasiProduzione } from './P_FasiProduzione.Types';


/* --------
* Model Definition
* -------- */
const P_FasiProduzione = mongoose.model<IP_FasiProduzione>(
  'P_FasiProduzione',
  P_FasiProduzioneSchema as any
) as mongoose.Model<IP_FasiProduzione>;

/* --------
* Module Exports
* -------- */
export default P_FasiProduzione;

export { P_FasiProduzioneSchema };

export type TP_FasiProduzioneModel = Omit<typeof P_FasiProduzione, 'traslateAliases'> & {
  translateAliases(raw: Partial<IP_FasiProduzione>): any
};

export type TP_FasiProduzioneDocument = 
& mongoose.Document<any, {}, IP_FasiProduzione>
& IP_FasiProduzione;

export { IP_FasiProduzione };