import * as mongoose from 'mongoose';

import PosizioniSchema from './Posizioni.Schema';
import type { IPosizioni } from './Posizioni.Types';


/* --------
* Model Definition
* -------- */
const Posizioni = mongoose.model<IPosizioni>(
  'Posizioni',
  PosizioniSchema as any
) as mongoose.Model<IPosizioni>;

/* --------
* Module Exports
* -------- */
export default Posizioni;

export { PosizioniSchema };

export type TPosizioniModel = Omit<typeof Posizioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IPosizioni>): any
};

export type TPosizioniDocument = 
& mongoose.Document<any, {}, IPosizioni>
& IPosizioni;

export { IPosizioni };