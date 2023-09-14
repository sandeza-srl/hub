import * as mongoose from 'mongoose';

import SottoMenuTestiSchema from './SottoMenuTesti.Schema';
import type { ISottoMenuTesti } from './SottoMenuTesti.Types';


/* --------
* Model Definition
* -------- */
const SottoMenuTesti = mongoose.model<ISottoMenuTesti>(
  'SottoMenuTesti',
  SottoMenuTestiSchema as any
) as mongoose.Model<ISottoMenuTesti>;

/* --------
* Module Exports
* -------- */
export default SottoMenuTesti;

export { SottoMenuTestiSchema };

export type TSottoMenuTestiModel = Omit<typeof SottoMenuTesti, 'traslateAliases'> & {
  translateAliases(raw: Partial<ISottoMenuTesti>): any
};

export type TSottoMenuTestiDocument = 
& mongoose.Document<any, {}, ISottoMenuTesti>
& ISottoMenuTesti;

export { ISottoMenuTesti };