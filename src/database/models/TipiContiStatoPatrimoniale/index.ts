import * as mongoose from 'mongoose';

import TipiContiStatoPatrimonialeSchema from './TipiContiStatoPatrimoniale.Schema';
import type { ITipiContiStatoPatrimoniale } from './TipiContiStatoPatrimoniale.Types';


/* --------
* Model Definition
* -------- */
const TipiContiStatoPatrimoniale = mongoose.model<ITipiContiStatoPatrimoniale>(
  'TipiContiStatoPatrimoniale',
  TipiContiStatoPatrimonialeSchema as any
) as mongoose.Model<ITipiContiStatoPatrimoniale>;

/* --------
* Module Exports
* -------- */
export default TipiContiStatoPatrimoniale;

export { TipiContiStatoPatrimonialeSchema };

export type TTipiContiStatoPatrimonialeModel = Omit<typeof TipiContiStatoPatrimoniale, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiContiStatoPatrimoniale>): any
};

export type TTipiContiStatoPatrimonialeDocument = 
& mongoose.Document<any, {}, ITipiContiStatoPatrimoniale>
& ITipiContiStatoPatrimoniale;

export { ITipiContiStatoPatrimoniale };