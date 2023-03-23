import * as mongoose from 'mongoose';

import ScadenzeDocOperativiSchema from './ScadenzeDocOperativi.Schema';
import type { IScadenzeDocOperativi } from './ScadenzeDocOperativi.Types';


/* --------
* Model Definition
* -------- */
const ScadenzeDocOperativi = mongoose.model<IScadenzeDocOperativi>(
  'ScadenzeDocOperativi',
  ScadenzeDocOperativiSchema as any
) as mongoose.Model<IScadenzeDocOperativi>;

/* --------
* Module Exports
* -------- */
export default ScadenzeDocOperativi;

export { ScadenzeDocOperativiSchema };

export type TScadenzeDocOperativiModel = typeof ScadenzeDocOperativi;

export type TScadenzeDocOperativiDocument = 
& mongoose.Document<any, {}, IScadenzeDocOperativi>
& IScadenzeDocOperativi;

export { IScadenzeDocOperativi };