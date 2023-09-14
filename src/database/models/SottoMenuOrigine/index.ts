import * as mongoose from 'mongoose';

import SottoMenuOrigineSchema from './SottoMenuOrigine.Schema';
import type { ISottoMenuOrigine } from './SottoMenuOrigine.Types';


/* --------
* Model Definition
* -------- */
const SottoMenuOrigine = mongoose.model<ISottoMenuOrigine>(
  'SottoMenuOrigine',
  SottoMenuOrigineSchema as any
) as mongoose.Model<ISottoMenuOrigine>;

/* --------
* Module Exports
* -------- */
export default SottoMenuOrigine;

export { SottoMenuOrigineSchema };

export type TSottoMenuOrigineModel = Omit<typeof SottoMenuOrigine, 'traslateAliases'> & {
  translateAliases(raw: Partial<ISottoMenuOrigine>): any
};

export type TSottoMenuOrigineDocument = 
& mongoose.Document<any, {}, ISottoMenuOrigine>
& ISottoMenuOrigine;

export { ISottoMenuOrigine };