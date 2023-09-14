import * as mongoose from 'mongoose';

import TipiRuoliSchema from './TipiRuoli.Schema';
import type { ITipiRuoli } from './TipiRuoli.Types';


/* --------
* Model Definition
* -------- */
const TipiRuoli = mongoose.model<ITipiRuoli>(
  'TipiRuoli',
  TipiRuoliSchema as any
) as mongoose.Model<ITipiRuoli>;

/* --------
* Module Exports
* -------- */
export default TipiRuoli;

export { TipiRuoliSchema };

export type TTipiRuoliModel = Omit<typeof TipiRuoli, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiRuoli>): any
};

export type TTipiRuoliDocument = 
& mongoose.Document<any, {}, ITipiRuoli>
& ITipiRuoli;

export { ITipiRuoli };