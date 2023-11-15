import * as mongoose from 'mongoose';

import CostBreakdownVociOfferteSchema from './CostBreakdownVociOfferte.Schema';
import type { ICostBreakdownVociOfferte } from './CostBreakdownVociOfferte.Types';


/* --------
* Model Definition
* -------- */
const CostBreakdownVociOfferte = mongoose.model<ICostBreakdownVociOfferte>(
  'CostBreakdownVociOfferte',
  CostBreakdownVociOfferteSchema as any
) as mongoose.Model<ICostBreakdownVociOfferte>;

/* --------
* Module Exports
* -------- */
export default CostBreakdownVociOfferte;

export { CostBreakdownVociOfferteSchema };

export type TCostBreakdownVociOfferteModel = Omit<typeof CostBreakdownVociOfferte, 'traslateAliases'> & {
  translateAliases(raw: Partial<ICostBreakdownVociOfferte>): any
};

export type TCostBreakdownVociOfferteDocument = 
& mongoose.Document<any, {}, ICostBreakdownVociOfferte>
& ICostBreakdownVociOfferte;

export { ICostBreakdownVociOfferte };