import * as mongoose from 'mongoose';

import VociTipiZoneSchema from './VociTipiZone.Schema';
import type { IVociTipiZone } from './VociTipiZone.Types';


/* --------
* Model Definition
* -------- */
const VociTipiZone = mongoose.model<IVociTipiZone>(
  'VociTipiZone',
  VociTipiZoneSchema as any
) as mongoose.Model<IVociTipiZone>;

/* --------
* Module Exports
* -------- */
export default VociTipiZone;

export { VociTipiZoneSchema };

export type TVociTipiZoneModel = typeof VociTipiZone;

export type TVociTipiZoneDocument = 
& mongoose.Document<any, {}, IVociTipiZone>
& IVociTipiZone;

export { IVociTipiZone };