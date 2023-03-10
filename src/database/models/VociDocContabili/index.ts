import * as mongoose from 'mongoose';

import VociDocContabiliSchema from './VociDocContabili.Schema';
import type { IVociDocContabili } from './VociDocContabili.Types';


/* --------
* Model Definition
* -------- */
const VociDocContabili = mongoose.model<IVociDocContabili>(
  'VociDocContabili',
  VociDocContabiliSchema as any
) as mongoose.Model<IVociDocContabili>;

/* --------
* Module Exports
* -------- */
export default VociDocContabili;

export { VociDocContabiliSchema };

export type TVociDocContabiliModel = typeof VociDocContabili;

export type TVociDocContabiliDocument = 
& mongoose.Document<any, {}, IVociDocContabili>
& IVociDocContabili;

export { IVociDocContabili };