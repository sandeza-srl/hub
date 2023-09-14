import * as mongoose from 'mongoose';

import TipiPosizioniSchema from './TipiPosizioni.Schema';
import type { ITipiPosizioni } from './TipiPosizioni.Types';


/* --------
* Model Definition
* -------- */
const TipiPosizioni = mongoose.model<ITipiPosizioni>(
  'TipiPosizioni',
  TipiPosizioniSchema as any
) as mongoose.Model<ITipiPosizioni>;

/* --------
* Module Exports
* -------- */
export default TipiPosizioni;

export { TipiPosizioniSchema };

export type TTipiPosizioniModel = Omit<typeof TipiPosizioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiPosizioni>): any
};

export type TTipiPosizioniDocument = 
& mongoose.Document<any, {}, ITipiPosizioni>
& ITipiPosizioni;

export { ITipiPosizioni };