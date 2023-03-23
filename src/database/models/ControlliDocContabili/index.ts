import * as mongoose from 'mongoose';

import ControlliDocContabiliSchema from './ControlliDocContabili.Schema';
import type { IControlliDocContabili } from './ControlliDocContabili.Types';


/* --------
* Model Definition
* -------- */
const ControlliDocContabili = mongoose.model<IControlliDocContabili>(
  'ControlliDocContabili',
  ControlliDocContabiliSchema as any
) as mongoose.Model<IControlliDocContabili>;

/* --------
* Module Exports
* -------- */
export default ControlliDocContabili;

export { ControlliDocContabiliSchema };

export type TControlliDocContabiliModel = typeof ControlliDocContabili;

export type TControlliDocContabiliDocument = 
& mongoose.Document<any, {}, IControlliDocContabili>
& IControlliDocContabili;

export { IControlliDocContabili };