import * as mongoose from 'mongoose';

import ContatoreCalendarioInterventiSchema from './ContatoreCalendarioInterventi.Schema';
import type { IContatoreCalendarioInterventi } from './ContatoreCalendarioInterventi.Types';


/* --------
* Model Definition
* -------- */
const ContatoreCalendarioInterventi = mongoose.model<IContatoreCalendarioInterventi>(
  'ContatoreCalendarioInterventi',
  ContatoreCalendarioInterventiSchema as any
) as mongoose.Model<IContatoreCalendarioInterventi>;

/* --------
* Module Exports
* -------- */
export default ContatoreCalendarioInterventi;

export { ContatoreCalendarioInterventiSchema };

export type TContatoreCalendarioInterventiModel = Omit<typeof ContatoreCalendarioInterventi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IContatoreCalendarioInterventi>): any
};

export type TContatoreCalendarioInterventiDocument = 
& mongoose.Document<any, {}, IContatoreCalendarioInterventi>
& IContatoreCalendarioInterventi;

export { IContatoreCalendarioInterventi };