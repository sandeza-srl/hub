import * as mongoose from 'mongoose';

import TipiMagazziniSchema from './TipiMagazzini.Schema';
import type { ITipiMagazzini } from './TipiMagazzini.Types';


/* --------
* Model Definition
* -------- */
const TipiMagazzini = mongoose.model<ITipiMagazzini>(
  'TipiMagazzini',
  TipiMagazziniSchema as any
) as mongoose.Model<ITipiMagazzini>;

/* --------
* Module Exports
* -------- */
export default TipiMagazzini;

export { TipiMagazziniSchema };

export type TTipiMagazziniModel = typeof TipiMagazzini;

export type TTipiMagazziniDocument = 
& mongoose.Document<any, {}, ITipiMagazzini>
& ITipiMagazzini;

export { ITipiMagazzini };