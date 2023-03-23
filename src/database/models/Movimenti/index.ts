import * as mongoose from 'mongoose';

import MovimentiSchema from './Movimenti.Schema';
import type { IMovimenti } from './Movimenti.Types';


/* --------
* Model Definition
* -------- */
const Movimenti = mongoose.model<IMovimenti>(
  'Movimenti',
  MovimentiSchema as any
) as mongoose.Model<IMovimenti>;

/* --------
* Module Exports
* -------- */
export default Movimenti;

export { MovimentiSchema };

export type TMovimentiModel = typeof Movimenti;

export type TMovimentiDocument = 
& mongoose.Document<any, {}, IMovimenti>
& IMovimenti;

export { IMovimenti };