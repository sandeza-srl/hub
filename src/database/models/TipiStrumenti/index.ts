import * as mongoose from 'mongoose';

import TipiStrumentiSchema from './TipiStrumenti.Schema';
import type { ITipiStrumenti } from './TipiStrumenti.Types';


/* --------
* Model Definition
* -------- */
const TipiStrumenti = mongoose.model<ITipiStrumenti>(
  'TipiStrumenti',
  TipiStrumentiSchema as any
) as mongoose.Model<ITipiStrumenti>;

/* --------
* Module Exports
* -------- */
export default TipiStrumenti;

export { TipiStrumentiSchema };

export type TTipiStrumentiModel = Omit<typeof TipiStrumenti, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiStrumenti>): any
};

export type TTipiStrumentiDocument = 
& mongoose.Document<any, {}, ITipiStrumenti>
& ITipiStrumenti;

export { ITipiStrumenti };