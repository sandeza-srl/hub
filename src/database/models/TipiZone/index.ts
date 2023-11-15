import * as mongoose from 'mongoose';

import TipiZoneSchema from './TipiZone.Schema';
import type { ITipiZone } from './TipiZone.Types';


/* --------
* Model Definition
* -------- */
const TipiZone = mongoose.model<ITipiZone>(
  'TipiZone',
  TipiZoneSchema as any
) as mongoose.Model<ITipiZone>;

/* --------
* Module Exports
* -------- */
export default TipiZone;

export { TipiZoneSchema };

export type TTipiZoneModel = Omit<typeof TipiZone, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiZone>): any
};

export type TTipiZoneDocument = 
& mongoose.Document<any, {}, ITipiZone>
& ITipiZone;

export { ITipiZone };