import * as mongoose from 'mongoose';

import TipiSoluzioniSchema from './TipiSoluzioni.Schema';
import type { ITipiSoluzioni } from './TipiSoluzioni.Types';


/* --------
* Model Definition
* -------- */
const TipiSoluzioni = mongoose.model<ITipiSoluzioni>(
  'TipiSoluzioni',
  TipiSoluzioniSchema as any
) as mongoose.Model<ITipiSoluzioni>;

/* --------
* Module Exports
* -------- */
export default TipiSoluzioni;

export { TipiSoluzioniSchema };

export type TTipiSoluzioniModel = typeof TipiSoluzioni;

export type TTipiSoluzioniDocument = 
& mongoose.Document<any, {}, ITipiSoluzioni>
& ITipiSoluzioni;

export { ITipiSoluzioni };