import * as mongoose from 'mongoose';

import zzzItemsProduzioneSchema from './zzzItemsProduzione.Schema';
import type { IzzzItemsProduzione } from './zzzItemsProduzione.Types';


/* --------
* Model Definition
* -------- */
const zzzItemsProduzione = mongoose.model<IzzzItemsProduzione>(
  'zzzItemsProduzione',
  zzzItemsProduzioneSchema as any
) as mongoose.Model<IzzzItemsProduzione>;

/* --------
* Module Exports
* -------- */
export default zzzItemsProduzione;

export { zzzItemsProduzioneSchema };

export type TzzzItemsProduzioneModel = typeof zzzItemsProduzione;

export type TzzzItemsProduzioneDocument = 
& mongoose.Document<any, {}, IzzzItemsProduzione>
& IzzzItemsProduzione;

export { IzzzItemsProduzione };