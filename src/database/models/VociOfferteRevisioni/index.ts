import * as mongoose from 'mongoose';

import VociOfferteRevisioniSchema from './VociOfferteRevisioni.Schema';
import type { IVociOfferteRevisioni } from './VociOfferteRevisioni.Types';


/* --------
* Model Definition
* -------- */
const VociOfferteRevisioni = mongoose.model<IVociOfferteRevisioni>(
  'VociOfferteRevisioni',
  VociOfferteRevisioniSchema as any
) as mongoose.Model<IVociOfferteRevisioni>;

/* --------
* Module Exports
* -------- */
export default VociOfferteRevisioni;

export { VociOfferteRevisioniSchema };

export type TVociOfferteRevisioniModel = Omit<typeof VociOfferteRevisioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IVociOfferteRevisioni>): any
};

export type TVociOfferteRevisioniDocument = 
& mongoose.Document<any, {}, IVociOfferteRevisioni>
& IVociOfferteRevisioni;

export { IVociOfferteRevisioni };