import * as mongoose from 'mongoose';

import PreparazioneFasiSchema from './PreparazioneFasi.Schema';
import type { IPreparazioneFasi } from './PreparazioneFasi.Types';


/* --------
* Model Definition
* -------- */
const PreparazioneFasi = mongoose.model<IPreparazioneFasi>(
'PreparazioneFasi',
PreparazioneFasiSchema as any
) as mongoose.Model<IPreparazioneFasi>;

/* --------
* Module Exports
* -------- */
export default PreparazioneFasi;

export { PreparazioneFasiSchema };

export type TPreparazioneFasiModel = Omit<typeof PreparazioneFasi, 'traslateAliases'> & {
translateAliases(raw: Partial<IPreparazioneFasi>): any
};

export type TPreparazioneFasiDocument = 
& mongoose.Document<any, {}, IPreparazioneFasi>
& IPreparazioneFasi;

export { IPreparazioneFasi };