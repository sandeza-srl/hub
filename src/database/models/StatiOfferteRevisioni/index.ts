import * as mongoose from 'mongoose';

import StatiOfferteRevisioniSchema from './StatiOfferteRevisioni.Schema';
import type { IStatiOfferteRevisioni } from './StatiOfferteRevisioni.Types';


/* --------
* Model Definition
* -------- */
const StatiOfferteRevisioni = mongoose.model<IStatiOfferteRevisioni>(
  'StatiOfferteRevisioni',
  StatiOfferteRevisioniSchema as any
) as mongoose.Model<IStatiOfferteRevisioni>;

/* --------
* Module Exports
* -------- */
export default StatiOfferteRevisioni;

export { StatiOfferteRevisioniSchema };

export type TStatiOfferteRevisioniModel = Omit<typeof StatiOfferteRevisioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IStatiOfferteRevisioni>): any
};

export type TStatiOfferteRevisioniDocument = 
& mongoose.Document<any, {}, IStatiOfferteRevisioni>
& IStatiOfferteRevisioni;

export { IStatiOfferteRevisioni };