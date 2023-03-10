import * as mongoose from 'mongoose';

import DescrizioneRadiatoriSchema from './DescrizioneRadiatori.Schema';
import type { IDescrizioneRadiatori } from './DescrizioneRadiatori.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneRadiatori = mongoose.model<IDescrizioneRadiatori>(
  'DescrizioneRadiatori',
  DescrizioneRadiatoriSchema as any
) as mongoose.Model<IDescrizioneRadiatori>;

/* --------
* Module Exports
* -------- */
export default DescrizioneRadiatori;

export { DescrizioneRadiatoriSchema };

export type TDescrizioneRadiatoriModel = typeof DescrizioneRadiatori;

export type TDescrizioneRadiatoriDocument = 
& mongoose.Document<any, {}, IDescrizioneRadiatori>
& IDescrizioneRadiatori;

export { IDescrizioneRadiatori };