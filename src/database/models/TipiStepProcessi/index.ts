import * as mongoose from 'mongoose';

import TipiStepProcessiSchema from './TipiStepProcessi.Schema';
import type { ITipiStepProcessi } from './TipiStepProcessi.Types';


/* --------
* Model Definition
* -------- */
const TipiStepProcessi = mongoose.model<ITipiStepProcessi>(
  'TipiStepProcessi',
  TipiStepProcessiSchema as any
) as mongoose.Model<ITipiStepProcessi>;

/* --------
* Module Exports
* -------- */
export default TipiStepProcessi;

export { TipiStepProcessiSchema };

export type TTipiStepProcessiModel = typeof TipiStepProcessi;

export type TTipiStepProcessiDocument = 
& mongoose.Document<any, {}, ITipiStepProcessi>
& ITipiStepProcessi;

export { ITipiStepProcessi };