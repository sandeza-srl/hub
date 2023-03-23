import * as mongoose from 'mongoose';

import DescrizioneRegoleScadenzeSchema from './DescrizioneRegoleScadenze.Schema';
import type { IDescrizioneRegoleScadenze } from './DescrizioneRegoleScadenze.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneRegoleScadenze = mongoose.model<IDescrizioneRegoleScadenze>(
  'DescrizioneRegoleScadenze',
  DescrizioneRegoleScadenzeSchema as any
) as mongoose.Model<IDescrizioneRegoleScadenze>;

/* --------
* Module Exports
* -------- */
export default DescrizioneRegoleScadenze;

export { DescrizioneRegoleScadenzeSchema };

export type TDescrizioneRegoleScadenzeModel = typeof DescrizioneRegoleScadenze;

export type TDescrizioneRegoleScadenzeDocument = 
& mongoose.Document<any, {}, IDescrizioneRegoleScadenze>
& IDescrizioneRegoleScadenze;

export { IDescrizioneRegoleScadenze };