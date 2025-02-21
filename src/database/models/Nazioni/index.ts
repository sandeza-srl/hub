import * as mongoose from 'mongoose';

import NazioniSchema from './Nazioni.Schema';
import type { INazioni } from './Nazioni.Types';


/* --------
* Model Definition
* -------- */
const Nazioni = mongoose.model<INazioni>(
'Nazioni',
NazioniSchema as any
) as mongoose.Model<INazioni>;

/* --------
* Module Exports
* -------- */
export default Nazioni;

export { NazioniSchema };

export type TNazioniModel = Omit<typeof Nazioni, 'traslateAliases'> & {
translateAliases(raw: Partial<INazioni>): any
};

export type TNazioniDocument = 
& mongoose.Document<any, {}, INazioni>
& INazioni;

export { INazioni };