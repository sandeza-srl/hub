import * as mongoose from 'mongoose';

import TipiCasseBancheSchema from './TipiCasseBanche.Schema';
import type { ITipiCasseBanche } from './TipiCasseBanche.Types';


/* --------
* Model Definition
* -------- */
const TipiCasseBanche = mongoose.model<ITipiCasseBanche>(
'TipiCasseBanche',
TipiCasseBancheSchema as any
) as mongoose.Model<ITipiCasseBanche>;

/* --------
* Module Exports
* -------- */
export default TipiCasseBanche;

export { TipiCasseBancheSchema };

export type TTipiCasseBancheModel = Omit<typeof TipiCasseBanche, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiCasseBanche>): any
};

export type TTipiCasseBancheDocument = 
& mongoose.Document<any, {}, ITipiCasseBanche>
& ITipiCasseBanche;

export { ITipiCasseBanche };