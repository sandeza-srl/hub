import * as mongoose from 'mongoose';

import RevisioniOfferteSchema from './RevisioniOfferte.Schema';
import type { IRevisioniOfferte } from './RevisioniOfferte.Types';


/* --------
* Model Definition
* -------- */
const RevisioniOfferte = mongoose.model<IRevisioniOfferte>(
'RevisioniOfferte',
RevisioniOfferteSchema as any
) as mongoose.Model<IRevisioniOfferte>;

/* --------
* Module Exports
* -------- */
export default RevisioniOfferte;

export { RevisioniOfferteSchema };

export type TRevisioniOfferteModel = Omit<typeof RevisioniOfferte, 'traslateAliases'> & {
translateAliases(raw: Partial<IRevisioniOfferte>): any
};

export type TRevisioniOfferteDocument = 
& mongoose.Document<any, {}, IRevisioniOfferte>
& IRevisioniOfferte;

export { IRevisioniOfferte };