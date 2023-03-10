import * as mongoose from 'mongoose';

import RevisioniTipiProcessiSchema from './RevisioniTipiProcessi.Schema';
import type { IRevisioniTipiProcessi } from './RevisioniTipiProcessi.Types';


/* --------
* Model Definition
* -------- */
const RevisioniTipiProcessi = mongoose.model<IRevisioniTipiProcessi>(
  'RevisioniTipiProcessi',
  RevisioniTipiProcessiSchema as any
) as mongoose.Model<IRevisioniTipiProcessi>;

/* --------
* Module Exports
* -------- */
export default RevisioniTipiProcessi;

export { RevisioniTipiProcessiSchema };

export type TRevisioniTipiProcessiModel = typeof RevisioniTipiProcessi;

export type TRevisioniTipiProcessiDocument = 
& mongoose.Document<any, {}, IRevisioniTipiProcessi>
& IRevisioniTipiProcessi;

export { IRevisioniTipiProcessi };