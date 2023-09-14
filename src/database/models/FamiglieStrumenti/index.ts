import * as mongoose from 'mongoose';

import FamiglieStrumentiSchema from './FamiglieStrumenti.Schema';
import type { IFamiglieStrumenti } from './FamiglieStrumenti.Types';


/* --------
* Model Definition
* -------- */
const FamiglieStrumenti = mongoose.model<IFamiglieStrumenti>(
  'FamiglieStrumenti',
  FamiglieStrumentiSchema as any
) as mongoose.Model<IFamiglieStrumenti>;

/* --------
* Module Exports
* -------- */
export default FamiglieStrumenti;

export { FamiglieStrumentiSchema };

export type TFamiglieStrumentiModel = Omit<typeof FamiglieStrumenti, 'traslateAliases'> & {
  translateAliases(raw: Partial<IFamiglieStrumenti>): any
};

export type TFamiglieStrumentiDocument = 
& mongoose.Document<any, {}, IFamiglieStrumenti>
& IFamiglieStrumenti;

export { IFamiglieStrumenti };