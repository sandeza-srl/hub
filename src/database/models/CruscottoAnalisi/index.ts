import * as mongoose from 'mongoose';

import CruscottoAnalisiSchema from './CruscottoAnalisi.Schema';
import type { ICruscottoAnalisi } from './CruscottoAnalisi.Types';


/* --------
* Model Definition
* -------- */
const CruscottoAnalisi = mongoose.model<ICruscottoAnalisi>(
  'CruscottoAnalisi',
  CruscottoAnalisiSchema as any
) as mongoose.Model<ICruscottoAnalisi>;

/* --------
* Module Exports
* -------- */
export default CruscottoAnalisi;

export { CruscottoAnalisiSchema };

export type TCruscottoAnalisiModel = Omit<typeof CruscottoAnalisi, 'traslateAliases'> & {
  translateAliases(raw: Partial<ICruscottoAnalisi>): any
};

export type TCruscottoAnalisiDocument = 
& mongoose.Document<any, {}, ICruscottoAnalisi>
& ICruscottoAnalisi;

export { ICruscottoAnalisi };