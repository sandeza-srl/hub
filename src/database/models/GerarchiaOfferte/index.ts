import * as mongoose from 'mongoose';

import GerarchiaOfferteSchema from './GerarchiaOfferte.Schema';
import type { IGerarchiaOfferte } from './GerarchiaOfferte.Types';


/* --------
* Model Definition
* -------- */
const GerarchiaOfferte = mongoose.model<IGerarchiaOfferte>(
'GerarchiaOfferte',
GerarchiaOfferteSchema as any
) as mongoose.Model<IGerarchiaOfferte>;

/* --------
* Module Exports
* -------- */
export default GerarchiaOfferte;

export { GerarchiaOfferteSchema };

export type TGerarchiaOfferteModel = Omit<typeof GerarchiaOfferte, 'traslateAliases'> & {
translateAliases(raw: Partial<IGerarchiaOfferte>): any
};

export type TGerarchiaOfferteDocument = 
& mongoose.Document<any, {}, IGerarchiaOfferte>
& IGerarchiaOfferte;

export { IGerarchiaOfferte };