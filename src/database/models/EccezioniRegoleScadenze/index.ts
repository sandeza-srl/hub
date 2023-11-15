import * as mongoose from 'mongoose';

import EccezioniRegoleScadenzeSchema from './EccezioniRegoleScadenze.Schema';
import type { IEccezioniRegoleScadenze } from './EccezioniRegoleScadenze.Types';


/* --------
* Model Definition
* -------- */
const EccezioniRegoleScadenze = mongoose.model<IEccezioniRegoleScadenze>(
  'EccezioniRegoleScadenze',
  EccezioniRegoleScadenzeSchema as any
) as mongoose.Model<IEccezioniRegoleScadenze>;

/* --------
* Module Exports
* -------- */
export default EccezioniRegoleScadenze;

export { EccezioniRegoleScadenzeSchema };

export type TEccezioniRegoleScadenzeModel = Omit<typeof EccezioniRegoleScadenze, 'traslateAliases'> & {
  translateAliases(raw: Partial<IEccezioniRegoleScadenze>): any
};

export type TEccezioniRegoleScadenzeDocument = 
& mongoose.Document<any, {}, IEccezioniRegoleScadenze>
& IEccezioniRegoleScadenze;

export { IEccezioniRegoleScadenze };