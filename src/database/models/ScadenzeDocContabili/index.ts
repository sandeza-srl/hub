import * as mongoose from 'mongoose';

import ScadenzeDocContabiliSchema from './ScadenzeDocContabili.Schema';
import type { IScadenzeDocContabili } from './ScadenzeDocContabili.Types';


/* --------
* Model Definition
* -------- */
const ScadenzeDocContabili = mongoose.model<IScadenzeDocContabili>(
  'ScadenzeDocContabili',
  ScadenzeDocContabiliSchema as any
) as mongoose.Model<IScadenzeDocContabili>;

/* --------
* Module Exports
* -------- */
export default ScadenzeDocContabili;

export { ScadenzeDocContabiliSchema };

export type TScadenzeDocContabiliModel = typeof ScadenzeDocContabili;

export type TScadenzeDocContabiliDocument = 
& mongoose.Document<any, {}, IScadenzeDocContabili>
& IScadenzeDocContabili;

export { IScadenzeDocContabili };