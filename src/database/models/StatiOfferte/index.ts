import * as mongoose from 'mongoose';

import StatiOfferteSchema from './StatiOfferte.Schema';
import type { IStatiOfferte } from './StatiOfferte.Types';


/* --------
* Model Definition
* -------- */
const StatiOfferte = mongoose.model<IStatiOfferte>(
  'StatiOfferte',
  StatiOfferteSchema as any
) as mongoose.Model<IStatiOfferte>;

/* --------
* Module Exports
* -------- */
export default StatiOfferte;

export { StatiOfferteSchema };

export type TStatiOfferteModel = Omit<typeof StatiOfferte, 'traslateAliases'> & {
  translateAliases(raw: Partial<IStatiOfferte>): any
};

export type TStatiOfferteDocument = 
& mongoose.Document<any, {}, IStatiOfferte>
& IStatiOfferte;

export { IStatiOfferte };