import * as mongoose from 'mongoose';

import IntegrazioniOrigineSchema from './IntegrazioniOrigine.Schema';
import type { IIntegrazioniOrigine } from './IntegrazioniOrigine.Types';


/* --------
* Model Definition
* -------- */
const IntegrazioniOrigine = mongoose.model<IIntegrazioniOrigine>(
  'IntegrazioniOrigine',
  IntegrazioniOrigineSchema as any
) as mongoose.Model<IIntegrazioniOrigine>;

/* --------
* Module Exports
* -------- */
export default IntegrazioniOrigine;

export { IntegrazioniOrigineSchema };

export type TIntegrazioniOrigineModel = Omit<typeof IntegrazioniOrigine, 'traslateAliases'> & {
  translateAliases(raw: Partial<IIntegrazioniOrigine>): any
};

export type TIntegrazioniOrigineDocument = 
& mongoose.Document<any, {}, IIntegrazioniOrigine>
& IIntegrazioniOrigine;

export { IIntegrazioniOrigine };