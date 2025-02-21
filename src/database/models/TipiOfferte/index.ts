import * as mongoose from 'mongoose';

import TipiOfferteSchema from './TipiOfferte.Schema';
import type { ITipiOfferte } from './TipiOfferte.Types';


/* --------
* Model Definition
* -------- */
const TipiOfferte = mongoose.model<ITipiOfferte>(
'TipiOfferte',
TipiOfferteSchema as any
) as mongoose.Model<ITipiOfferte>;

/* --------
* Module Exports
* -------- */
export default TipiOfferte;

export { TipiOfferteSchema };

export type TTipiOfferteModel = Omit<typeof TipiOfferte, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiOfferte>): any
};

export type TTipiOfferteDocument = 
& mongoose.Document<any, {}, ITipiOfferte>
& ITipiOfferte;

export { ITipiOfferte };