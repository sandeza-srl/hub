import * as mongoose from 'mongoose';

import StazioniRaccoltaDatiSchema from './StazioniRaccoltaDati.Schema';
import type { IStazioniRaccoltaDati } from './StazioniRaccoltaDati.Types';


/* --------
* Model Definition
* -------- */
const StazioniRaccoltaDati = mongoose.model<IStazioniRaccoltaDati>(
  'StazioniRaccoltaDati',
  StazioniRaccoltaDatiSchema as any
) as mongoose.Model<IStazioniRaccoltaDati>;

/* --------
* Module Exports
* -------- */
export default StazioniRaccoltaDati;

export { StazioniRaccoltaDatiSchema };

export type TStazioniRaccoltaDatiModel = typeof StazioniRaccoltaDati;

export type TStazioniRaccoltaDatiDocument = 
& mongoose.Document<any, {}, IStazioniRaccoltaDati>
& IStazioniRaccoltaDati;

export { IStazioniRaccoltaDati };