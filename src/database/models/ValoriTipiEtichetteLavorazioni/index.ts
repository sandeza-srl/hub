import * as mongoose from 'mongoose';

import ValoriTipiEtichetteLavorazioniSchema from './ValoriTipiEtichetteLavorazioni.Schema';
import type { IValoriTipiEtichetteLavorazioni } from './ValoriTipiEtichetteLavorazioni.Types';


/* --------
* Model Definition
* -------- */
const ValoriTipiEtichetteLavorazioni = mongoose.model<IValoriTipiEtichetteLavorazioni>(
  'ValoriTipiEtichetteLavorazioni',
  ValoriTipiEtichetteLavorazioniSchema as any
) as mongoose.Model<IValoriTipiEtichetteLavorazioni>;

/* --------
* Module Exports
* -------- */
export default ValoriTipiEtichetteLavorazioni;

export { ValoriTipiEtichetteLavorazioniSchema };

export type TValoriTipiEtichetteLavorazioniModel = typeof ValoriTipiEtichetteLavorazioni;

export type TValoriTipiEtichetteLavorazioniDocument = 
& mongoose.Document<any, {}, IValoriTipiEtichetteLavorazioni>
& IValoriTipiEtichetteLavorazioni;

export { IValoriTipiEtichetteLavorazioni };