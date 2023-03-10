import * as mongoose from 'mongoose';

import CollegamentiTipiStepProcessiSchema from './CollegamentiTipiStepProcessi.Schema';
import type { ICollegamentiTipiStepProcessi } from './CollegamentiTipiStepProcessi.Types';


/* --------
* Model Definition
* -------- */
const CollegamentiTipiStepProcessi = mongoose.model<ICollegamentiTipiStepProcessi>(
  'CollegamentiTipiStepProcessi',
  CollegamentiTipiStepProcessiSchema as any
) as mongoose.Model<ICollegamentiTipiStepProcessi>;

/* --------
* Module Exports
* -------- */
export default CollegamentiTipiStepProcessi;

export { CollegamentiTipiStepProcessiSchema };

export type TCollegamentiTipiStepProcessiModel = typeof CollegamentiTipiStepProcessi;

export type TCollegamentiTipiStepProcessiDocument = 
& mongoose.Document<any, {}, ICollegamentiTipiStepProcessi>
& ICollegamentiTipiStepProcessi;

export { ICollegamentiTipiStepProcessi };