import * as mongoose from 'mongoose';

import CalendarioStoricoRisorseSchema from './CalendarioStoricoRisorse.Schema';
import type { ICalendarioStoricoRisorse } from './CalendarioStoricoRisorse.Types';


/* --------
* Model Definition
* -------- */
const CalendarioStoricoRisorse = mongoose.model<ICalendarioStoricoRisorse>(
'CalendarioStoricoRisorse',
CalendarioStoricoRisorseSchema as any
) as mongoose.Model<ICalendarioStoricoRisorse>;

/* --------
* Module Exports
* -------- */
export default CalendarioStoricoRisorse;

export { CalendarioStoricoRisorseSchema };

export type TCalendarioStoricoRisorseModel = Omit<typeof CalendarioStoricoRisorse, 'traslateAliases'> & {
translateAliases(raw: Partial<ICalendarioStoricoRisorse>): any
};

export type TCalendarioStoricoRisorseDocument = 
& mongoose.Document<any, {}, ICalendarioStoricoRisorse>
& ICalendarioStoricoRisorse;

export { ICalendarioStoricoRisorse };