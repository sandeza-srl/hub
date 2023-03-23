import * as mongoose from 'mongoose';

import MagazziniGestitiSchema from './MagazziniGestiti.Schema';
import type { IMagazziniGestiti } from './MagazziniGestiti.Types';


/* --------
* Model Definition
* -------- */
const MagazziniGestiti = mongoose.model<IMagazziniGestiti>(
  'MagazziniGestiti',
  MagazziniGestitiSchema as any
) as mongoose.Model<IMagazziniGestiti>;

/* --------
* Module Exports
* -------- */
export default MagazziniGestiti;

export { MagazziniGestitiSchema };

export type TMagazziniGestitiModel = typeof MagazziniGestiti;

export type TMagazziniGestitiDocument = 
& mongoose.Document<any, {}, IMagazziniGestiti>
& IMagazziniGestiti;

export { IMagazziniGestiti };