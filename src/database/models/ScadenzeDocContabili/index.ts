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

export type TScadenzeDocContabiliModel = Omit<typeof ScadenzeDocContabili, 'traslateAliases'> & {
  translateAliases(raw: Partial<IScadenzeDocContabili>): any
};

export type TScadenzeDocContabiliDocument = 
& mongoose.Document<any, {}, IScadenzeDocContabili>
& IScadenzeDocContabili;

export { IScadenzeDocContabili };