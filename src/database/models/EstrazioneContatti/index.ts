import * as mongoose from 'mongoose';

import EstrazioneContattiSchema from './EstrazioneContatti.Schema';
import type { IEstrazioneContatti } from './EstrazioneContatti.Types';


/* --------
* Model Definition
* -------- */
const EstrazioneContatti = mongoose.model<IEstrazioneContatti>(
  'EstrazioneContatti',
  EstrazioneContattiSchema as any
) as mongoose.Model<IEstrazioneContatti>;

/* --------
* Module Exports
* -------- */
export default EstrazioneContatti;

export { EstrazioneContattiSchema };

export type TEstrazioneContattiModel = typeof EstrazioneContatti;

export type TEstrazioneContattiDocument = 
& mongoose.Document<any, {}, IEstrazioneContatti>
& IEstrazioneContatti;

export { IEstrazioneContatti };