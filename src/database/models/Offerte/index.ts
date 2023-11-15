import * as mongoose from 'mongoose';

import OfferteSchema from './Offerte.Schema';
import type { IOfferte } from './Offerte.Types';


/* --------
* Model Definition
* -------- */
const Offerte = mongoose.model<IOfferte>(
  'Offerte',
  OfferteSchema as any
) as mongoose.Model<IOfferte>;

/* --------
* Module Exports
* -------- */
export default Offerte;

export { OfferteSchema };

export type TOfferteModel = Omit<typeof Offerte, 'traslateAliases'> & {
  translateAliases(raw: Partial<IOfferte>): any
};

export type TOfferteDocument = 
& mongoose.Document<any, {}, IOfferte>
& IOfferte;

export { IOfferte };