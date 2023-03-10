import * as mongoose from 'mongoose';

import ProcessiSchema from './Processi.Schema';
import type { IProcessi } from './Processi.Types';


/* --------
* Model Definition
* -------- */
const Processi = mongoose.model<IProcessi>(
  'Processi',
  ProcessiSchema as any
) as mongoose.Model<IProcessi>;

/* --------
* Module Exports
* -------- */
export default Processi;

export { ProcessiSchema };

export type TProcessiModel = typeof Processi;

export type TProcessiDocument = 
& mongoose.Document<any, {}, IProcessi>
& IProcessi;

export { IProcessi };