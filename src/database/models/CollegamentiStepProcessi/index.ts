import * as mongoose from 'mongoose';

import CollegamentiStepProcessiSchema from './CollegamentiStepProcessi.Schema';
import type { ICollegamentiStepProcessi } from './CollegamentiStepProcessi.Types';


/* --------
* Model Definition
* -------- */
const CollegamentiStepProcessi = mongoose.model<ICollegamentiStepProcessi>(
  'CollegamentiStepProcessi',
  CollegamentiStepProcessiSchema as any
) as mongoose.Model<ICollegamentiStepProcessi>;

/* --------
* Module Exports
* -------- */
export default CollegamentiStepProcessi;

export { CollegamentiStepProcessiSchema };

export type TCollegamentiStepProcessiModel = typeof CollegamentiStepProcessi;

export type TCollegamentiStepProcessiDocument = 
& mongoose.Document<any, {}, ICollegamentiStepProcessi>
& ICollegamentiStepProcessi;

export { ICollegamentiStepProcessi };