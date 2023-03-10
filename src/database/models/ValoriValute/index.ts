import * as mongoose from 'mongoose';

import ValoriValuteSchema from './ValoriValute.Schema';
import type { IValoriValute } from './ValoriValute.Types';


/* --------
* Model Definition
* -------- */
const ValoriValute = mongoose.model<IValoriValute>(
  'ValoriValute',
  ValoriValuteSchema as any
) as mongoose.Model<IValoriValute>;

/* --------
* Module Exports
* -------- */
export default ValoriValute;

export { ValoriValuteSchema };

export type TValoriValuteModel = typeof ValoriValute;

export type TValoriValuteDocument = 
& mongoose.Document<any, {}, IValoriValute>
& IValoriValute;

export { IValoriValute };