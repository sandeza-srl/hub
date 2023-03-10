import * as mongoose from 'mongoose';

import ControlliOpzioneSchema from './ControlliOpzione.Schema';
import type { IControlliOpzione } from './ControlliOpzione.Types';


/* --------
* Model Definition
* -------- */
const ControlliOpzione = mongoose.model<IControlliOpzione>(
  'ControlliOpzione',
  ControlliOpzioneSchema as any
) as mongoose.Model<IControlliOpzione>;

/* --------
* Module Exports
* -------- */
export default ControlliOpzione;

export { ControlliOpzioneSchema };

export type TControlliOpzioneModel = typeof ControlliOpzione;

export type TControlliOpzioneDocument = 
& mongoose.Document<any, {}, IControlliOpzione>
& IControlliOpzione;

export { IControlliOpzione };