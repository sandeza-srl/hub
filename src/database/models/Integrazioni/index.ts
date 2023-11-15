import * as mongoose from 'mongoose';

import IntegrazioniSchema from './Integrazioni.Schema';
import type { IIntegrazioni } from './Integrazioni.Types';


/* --------
* Model Definition
* -------- */
const Integrazioni = mongoose.model<IIntegrazioni>(
  'Integrazioni',
  IntegrazioniSchema as any
) as mongoose.Model<IIntegrazioni>;

/* --------
* Module Exports
* -------- */
export default Integrazioni;

export { IntegrazioniSchema };

export type TIntegrazioniModel = Omit<typeof Integrazioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IIntegrazioni>): any
};

export type TIntegrazioniDocument = 
& mongoose.Document<any, {}, IIntegrazioni>
& IIntegrazioni;

export { IIntegrazioni };