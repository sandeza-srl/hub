import * as mongoose from 'mongoose';

import RisorseTipiFasiSchema from './RisorseTipiFasi.Schema';
import type { IRisorseTipiFasi } from './RisorseTipiFasi.Types';


/* --------
* Model Definition
* -------- */
const RisorseTipiFasi = mongoose.model<IRisorseTipiFasi>(
  'RisorseTipiFasi',
  RisorseTipiFasiSchema as any
) as mongoose.Model<IRisorseTipiFasi>;

/* --------
* Module Exports
* -------- */
export default RisorseTipiFasi;

export { RisorseTipiFasiSchema };

export type TRisorseTipiFasiModel = typeof RisorseTipiFasi;

export type TRisorseTipiFasiDocument = 
& mongoose.Document<any, {}, IRisorseTipiFasi>
& IRisorseTipiFasi;

export { IRisorseTipiFasi };