import * as mongoose from 'mongoose';

import DispositiviRaccoltaDatiSchema from './DispositiviRaccoltaDati.Schema';
import type { IDispositiviRaccoltaDati } from './DispositiviRaccoltaDati.Types';


/* --------
* Model Definition
* -------- */
const DispositiviRaccoltaDati = mongoose.model<IDispositiviRaccoltaDati>(
  'DispositiviRaccoltaDati',
  DispositiviRaccoltaDatiSchema as any
) as mongoose.Model<IDispositiviRaccoltaDati>;

/* --------
* Module Exports
* -------- */
export default DispositiviRaccoltaDati;

export { DispositiviRaccoltaDatiSchema };

export type TDispositiviRaccoltaDatiModel = typeof DispositiviRaccoltaDati;

export type TDispositiviRaccoltaDatiDocument = 
& mongoose.Document<any, {}, IDispositiviRaccoltaDati>
& IDispositiviRaccoltaDati;

export { IDispositiviRaccoltaDati };