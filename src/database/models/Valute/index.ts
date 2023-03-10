import * as mongoose from 'mongoose';

import ValuteSchema from './Valute.Schema';
import type { IValute } from './Valute.Types';


/* --------
* Model Definition
* -------- */
const Valute = mongoose.model<IValute>(
  'Valute',
  ValuteSchema as any
) as mongoose.Model<IValute>;

/* --------
* Module Exports
* -------- */
export default Valute;

export { ValuteSchema };

export type TValuteModel = typeof Valute;

export type TValuteDocument = 
& mongoose.Document<any, {}, IValute>
& IValute;

export { IValute };