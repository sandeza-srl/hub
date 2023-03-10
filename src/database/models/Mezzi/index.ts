import * as mongoose from 'mongoose';

import MezziSchema from './Mezzi.Schema';
import type { IMezzi } from './Mezzi.Types';


/* --------
* Model Definition
* -------- */
const Mezzi = mongoose.model<IMezzi>(
  'Mezzi',
  MezziSchema as any
) as mongoose.Model<IMezzi>;

/* --------
* Module Exports
* -------- */
export default Mezzi;

export { MezziSchema };

export type TMezziModel = typeof Mezzi;

export type TMezziDocument = 
& mongoose.Document<any, {}, IMezzi>
& IMezzi;

export { IMezzi };