import * as mongoose from 'mongoose';

import CicliSchema from './Cicli.Schema';
import type { ICicli } from './Cicli.Types';


/* --------
* Model Definition
* -------- */
const Cicli = mongoose.model<ICicli>(
  'Cicli',
  CicliSchema as any
) as mongoose.Model<ICicli>;

/* --------
* Module Exports
* -------- */
export default Cicli;

export { CicliSchema };

export type TCicliModel = typeof Cicli;

export type TCicliDocument = 
& mongoose.Document<any, {}, ICicli>
& ICicli;

export { ICicli };