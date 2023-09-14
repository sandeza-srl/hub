import * as mongoose from 'mongoose';

import TipiClassiInterventiSchema from './TipiClassiInterventi.Schema';
import type { ITipiClassiInterventi } from './TipiClassiInterventi.Types';


/* --------
* Model Definition
* -------- */
const TipiClassiInterventi = mongoose.model<ITipiClassiInterventi>(
  'TipiClassiInterventi',
  TipiClassiInterventiSchema as any
) as mongoose.Model<ITipiClassiInterventi>;

/* --------
* Module Exports
* -------- */
export default TipiClassiInterventi;

export { TipiClassiInterventiSchema };

export type TTipiClassiInterventiModel = Omit<typeof TipiClassiInterventi, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiClassiInterventi>): any
};

export type TTipiClassiInterventiDocument = 
& mongoose.Document<any, {}, ITipiClassiInterventi>
& ITipiClassiInterventi;

export { ITipiClassiInterventi };