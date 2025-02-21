import * as mongoose from 'mongoose';

import OfferteTestateRevisioniSchema from './OfferteTestateRevisioni.Schema';
import type { IOfferteTestateRevisioni } from './OfferteTestateRevisioni.Types';


/* --------
* Model Definition
* -------- */
const OfferteTestateRevisioni = mongoose.model<IOfferteTestateRevisioni>(
'OfferteTestateRevisioni',
OfferteTestateRevisioniSchema as any
) as mongoose.Model<IOfferteTestateRevisioni>;

/* --------
* Module Exports
* -------- */
export default OfferteTestateRevisioni;

export { OfferteTestateRevisioniSchema };

export type TOfferteTestateRevisioniModel = Omit<typeof OfferteTestateRevisioni, 'traslateAliases'> & {
translateAliases(raw: Partial<IOfferteTestateRevisioni>): any
};

export type TOfferteTestateRevisioniDocument = 
& mongoose.Document<any, {}, IOfferteTestateRevisioni>
& IOfferteTestateRevisioni;

export { IOfferteTestateRevisioni };