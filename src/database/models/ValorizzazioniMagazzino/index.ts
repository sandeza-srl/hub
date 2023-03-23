import * as mongoose from 'mongoose';

import ValorizzazioniMagazzinoSchema from './ValorizzazioniMagazzino.Schema';
import type { IValorizzazioniMagazzino } from './ValorizzazioniMagazzino.Types';


/* --------
* Model Definition
* -------- */
const ValorizzazioniMagazzino = mongoose.model<IValorizzazioniMagazzino>(
  'ValorizzazioniMagazzino',
  ValorizzazioniMagazzinoSchema as any
) as mongoose.Model<IValorizzazioniMagazzino>;

/* --------
* Module Exports
* -------- */
export default ValorizzazioniMagazzino;

export { ValorizzazioniMagazzinoSchema };

export type TValorizzazioniMagazzinoModel = typeof ValorizzazioniMagazzino;

export type TValorizzazioniMagazzinoDocument = 
& mongoose.Document<any, {}, IValorizzazioniMagazzino>
& IValorizzazioniMagazzino;

export { IValorizzazioniMagazzino };