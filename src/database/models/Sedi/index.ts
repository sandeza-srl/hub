import * as mongoose from 'mongoose';

import SediSchema from './Sedi.Schema';
import type { ISedi } from './Sedi.Types';


/* --------
* Model Definition
* -------- */
const Sedi = mongoose.model<ISedi>(
  'Sedi',
  SediSchema as any
) as mongoose.Model<ISedi>;

/* --------
* Module Exports
* -------- */
export default Sedi;

export { SediSchema };

export type TSediModel = Omit<typeof Sedi, 'traslateAliases'> & {
  translateAliases(raw: Partial<ISedi>): any
};

export type TSediDocument =
  & mongoose.Document<any, {}, ISedi>
  & ISedi;

export { ISedi };
