import * as mongoose from 'mongoose';

import PacchiSchema from './Pacchi.Schema';
import type { IPacchi } from './Pacchi.Types';


/* --------
* Model Definition
* -------- */
const Pacchi = mongoose.model<IPacchi>(
  'Pacchi',
  PacchiSchema as any
) as mongoose.Model<IPacchi>;

/* --------
* Module Exports
* -------- */
export default Pacchi;

export { PacchiSchema };

export type TPacchiModel = typeof Pacchi;

export type TPacchiDocument = 
& mongoose.Document<any, {}, IPacchi>
& IPacchi;

export { IPacchi };