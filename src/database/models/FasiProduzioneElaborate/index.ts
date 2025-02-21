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

export type TFasiProduzioneElaborateModel = Omit<typeof FasiProduzioneElaborate, 'traslateAliases'> & {
translateAliases(raw: Partial<IFasiProduzioneElaborate>): any
};

export type TFasiProduzioneElaborateDocument = 
& mongoose.Document<any, {}, IFasiProduzioneElaborate>
& IFasiProduzioneElaborate;

export { IFasiProduzioneElaborate };