import * as mongoose from 'mongoose';

import ControlliFaseProduzioneSchema from './ControlliFaseProduzione.Schema';
import type { IControlliFaseProduzione } from './ControlliFaseProduzione.Types';


/* --------
* Model Definition
* -------- */
const ControlliFaseProduzione = mongoose.model<IControlliFaseProduzione>(
  'ControlliFaseProduzione',
  ControlliFaseProduzioneSchema as any
) as mongoose.Model<IControlliFaseProduzione>;

/* --------
* Module Exports
* -------- */
export default ControlliFaseProduzione;

export { ControlliFaseProduzioneSchema };

export type TControlliFaseProduzioneModel = typeof ControlliFaseProduzione;

export type TControlliFaseProduzioneDocument = 
& mongoose.Document<any, {}, IControlliFaseProduzione>
& IControlliFaseProduzione;

export { IControlliFaseProduzione };