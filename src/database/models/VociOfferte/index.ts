import * as mongoose from 'mongoose';

import VociOfferteSchema from './VociOfferte.Schema';
import type { IVociOfferte } from './VociOfferte.Types';


/* --------
* Model Definition
* -------- */
const VociOfferte = mongoose.model<IVociOfferte>(
  'VociOfferte',
  VociOfferteSchema as any
) as mongoose.Model<IVociOfferte>;

/* --------
* Module Exports
* -------- */
export default VociOfferte;

export { VociOfferteSchema };

export type TVociOfferteModel = Omit<typeof VociOfferte, 'traslateAliases'> & {
  translateAliases(raw: Partial<IVociOfferte>): any
};

export type TVociOfferteDocument = 
& mongoose.Document<any, {}, IVociOfferte>
& IVociOfferte;

export { IVociOfferte };