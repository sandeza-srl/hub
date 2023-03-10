import * as mongoose from 'mongoose';

import TipiScaglioniTipiArticoliSchema from './TipiScaglioniTipiArticoli.Schema';
import type { ITipiScaglioniTipiArticoli } from './TipiScaglioniTipiArticoli.Types';


/* --------
* Model Definition
* -------- */
const TipiScaglioniTipiArticoli = mongoose.model<ITipiScaglioniTipiArticoli>(
  'TipiScaglioniTipiArticoli',
  TipiScaglioniTipiArticoliSchema as any
) as mongoose.Model<ITipiScaglioniTipiArticoli>;

/* --------
* Module Exports
* -------- */
export default TipiScaglioniTipiArticoli;

export { TipiScaglioniTipiArticoliSchema };

export type TTipiScaglioniTipiArticoliModel = typeof TipiScaglioniTipiArticoli;

export type TTipiScaglioniTipiArticoliDocument = 
& mongoose.Document<any, {}, ITipiScaglioniTipiArticoli>
& ITipiScaglioniTipiArticoli;

export { ITipiScaglioniTipiArticoli };