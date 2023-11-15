import * as mongoose from 'mongoose';

import CalendarioInterventiSchema from './CalendarioInterventi.Schema';
import type { ICalendarioInterventi } from './CalendarioInterventi.Types';


/* --------
* Model Definition
* -------- */
const CalendarioInterventi = mongoose.model<ICalendarioInterventi>(
  'CalendarioInterventi',
  CalendarioInterventiSchema as any
) as mongoose.Model<ICalendarioInterventi>;

/* --------
* Module Exports
* -------- */
export default CalendarioInterventi;

export { CalendarioInterventiSchema };

export type TCalendarioInterventiModel = Omit<typeof CalendarioInterventi, 'traslateAliases'> & {
  translateAliases(raw: Partial<ICalendarioInterventi>): any
};

export type TCalendarioInterventiDocument = 
& mongoose.Document<any, {}, ICalendarioInterventi>
& ICalendarioInterventi;

export { ICalendarioInterventi };