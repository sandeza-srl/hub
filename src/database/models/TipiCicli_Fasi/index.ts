import * as mongoose from 'mongoose';

import TipiCicli_FasiSchema from './TipiCicli_Fasi.Schema';
import type { ITipiCicli_Fasi } from './TipiCicli_Fasi.Types';


/* --------
* Model Definition
* -------- */
const TipiCicli_Fasi = mongoose.model<ITipiCicli_Fasi>(
  'TipiCicli_Fasi',
  TipiCicli_FasiSchema as any
) as mongoose.Model<ITipiCicli_Fasi>;

/* --------
* Module Exports
* -------- */
export default TipiCicli_Fasi;

export { TipiCicli_FasiSchema };

export type TTipiCicli_FasiModel = typeof TipiCicli_Fasi;

export type TTipiCicli_FasiDocument = 
& mongoose.Document<any, {}, ITipiCicli_Fasi>
& ITipiCicli_Fasi;

export { ITipiCicli_Fasi };