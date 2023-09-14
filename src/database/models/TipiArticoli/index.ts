import * as mongoose from 'mongoose';

import TipiArticoliSchema from './TipiArticoli.Schema';
import type { ITipiArticoli } from './TipiArticoli.Types';


/* --------
* Model Definition
* -------- */
const TipiArticoli = mongoose.model<ITipiArticoli>(
  'TipiArticoli',
  TipiArticoliSchema as any
) as mongoose.Model<ITipiArticoli>;

/* --------
* Module Exports
* -------- */
export default TipiArticoli;

export { TipiArticoliSchema };

export type TTipiArticoliModel = Omit<typeof TipiArticoli, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiArticoli>): any
};

export type TTipiArticoliDocument = 
& mongoose.Document<any, {}, ITipiArticoli>
& ITipiArticoli;

export { ITipiArticoli };