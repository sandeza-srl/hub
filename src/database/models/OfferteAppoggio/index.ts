import * as mongoose from 'mongoose';

import OfferteAppoggioSchema from './OfferteAppoggio.Schema';
import type { IOfferteAppoggio } from './OfferteAppoggio.Types';


/* --------
* Model Definition
* -------- */
const OfferteAppoggio = mongoose.model<IOfferteAppoggio>(
  'OfferteAppoggio',
  OfferteAppoggioSchema as any
) as mongoose.Model<IOfferteAppoggio>;

/* --------
* Module Exports
* -------- */
export default OfferteAppoggio;

export { OfferteAppoggioSchema };

export type TOfferteAppoggioModel = Omit<typeof OfferteAppoggio, 'traslateAliases'> & {
  translateAliases(raw: Partial<IOfferteAppoggio>): any
};

export type TOfferteAppoggioDocument = 
& mongoose.Document<any, {}, IOfferteAppoggio>
& IOfferteAppoggio;

export { IOfferteAppoggio };