import * as mongoose from 'mongoose';

import TipiFasiSchema from './TipiFasi.Schema';
import type { ITipiFasi } from './TipiFasi.Types';


/* --------
* Model Definition
* -------- */
const TipiFasi = mongoose.model<ITipiFasi>(
'TipiFasi',
TipiFasiSchema as any
) as mongoose.Model<ITipiFasi>;

/* --------
* Module Exports
* -------- */
export default TipiFasi;

export { TipiFasiSchema };

export type TTipiFasiModel = Omit<typeof TipiFasi, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiFasi>): any
};

export type TTipiFasiDocument = 
& mongoose.Document<any, {}, ITipiFasi>
& ITipiFasi;

export { ITipiFasi };