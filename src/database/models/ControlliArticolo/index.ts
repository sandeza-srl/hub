import * as mongoose from 'mongoose';

import ControlliArticoloSchema from './ControlliArticolo.Schema';
import type { IControlliArticolo } from './ControlliArticolo.Types';


/* --------
* Model Definition
* -------- */
const ControlliArticolo = mongoose.model<IControlliArticolo>(
  'ControlliArticolo',
  ControlliArticoloSchema as any
) as mongoose.Model<IControlliArticolo>;

/* --------
* Module Exports
* -------- */
export default ControlliArticolo;

export { ControlliArticoloSchema };

export type TControlliArticoloModel = typeof ControlliArticolo;

export type TControlliArticoloDocument = 
& mongoose.Document<any, {}, IControlliArticolo>
& IControlliArticolo;

export { IControlliArticolo };