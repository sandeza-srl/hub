import * as mongoose from 'mongoose';

import FasiProduzioneElaborateSchema from './FasiProduzioneElaborate.Schema';
import type { IFasiProduzioneElaborate } from './FasiProduzioneElaborate.Types';


/* --------
* Model Definition
* -------- */
const FasiProduzioneElaborate = mongoose.model<IFasiProduzioneElaborate>(
  'FasiProduzioneElaborate',
  FasiProduzioneElaborateSchema as any
) as mongoose.Model<IFasiProduzioneElaborate>;

/* --------
* Module Exports
* -------- */
export default FasiProduzioneElaborate;

export { FasiProduzioneElaborateSchema };

export type TFasiProduzioneElaborateModel = typeof FasiProduzioneElaborate;

export type TFasiProduzioneElaborateDocument = 
& mongoose.Document<any, {}, IFasiProduzioneElaborate>
& IFasiProduzioneElaborate;

export { IFasiProduzioneElaborate };