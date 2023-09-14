import * as mongoose from 'mongoose';

import FasiSchema from './Fasi.Schema';
import type { IFasi } from './Fasi.Types';


/* --------
* Model Definition
* -------- */
const Fasi = mongoose.model<IFasi>(
  'Fasi',
  FasiSchema as any
) as mongoose.Model<IFasi>;

/* --------
* Module Exports
* -------- */
export default Fasi;

export { FasiSchema };

export type TFasiModel = Omit<typeof Fasi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IFasi>): any
};

export type TFasiDocument = 
& mongoose.Document<any, {}, IFasi>
& IFasi;

export { IFasi };