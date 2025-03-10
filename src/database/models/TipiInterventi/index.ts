import * as mongoose from 'mongoose';

import TipiInterventiSchema from './TipiInterventi.Schema';
import type { ITipiInterventi } from './TipiInterventi.Types';


/* --------
* Model Definition
* -------- */
const TipiInterventi = mongoose.model<ITipiInterventi>(
'TipiInterventi',
TipiInterventiSchema as any
) as mongoose.Model<ITipiInterventi>;

/* --------
* Module Exports
* -------- */
export default TipiInterventi;

export { TipiInterventiSchema };

export type TTipiInterventiModel = Omit<typeof TipiInterventi, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiInterventi>): any
};

export type TTipiInterventiDocument = 
& mongoose.Document<any, {}, ITipiInterventi>
& ITipiInterventi;

export { ITipiInterventi };