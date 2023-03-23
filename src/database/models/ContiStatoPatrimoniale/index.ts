import * as mongoose from 'mongoose';

import ContiStatoPatrimonialeSchema from './ContiStatoPatrimoniale.Schema';
import type { IContiStatoPatrimoniale } from './ContiStatoPatrimoniale.Types';


/* --------
* Model Definition
* -------- */
const ContiStatoPatrimoniale = mongoose.model<IContiStatoPatrimoniale>(
  'ContiStatoPatrimoniale',
  ContiStatoPatrimonialeSchema as any
) as mongoose.Model<IContiStatoPatrimoniale>;

/* --------
* Module Exports
* -------- */
export default ContiStatoPatrimoniale;

export { ContiStatoPatrimonialeSchema };

export type TContiStatoPatrimonialeModel = typeof ContiStatoPatrimoniale;

export type TContiStatoPatrimonialeDocument = 
& mongoose.Document<any, {}, IContiStatoPatrimoniale>
& IContiStatoPatrimoniale;

export { IContiStatoPatrimoniale };