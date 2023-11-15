import * as mongoose from 'mongoose';

import VociOfferteAppoggioSchema from './VociOfferteAppoggio.Schema';
import type { IVociOfferteAppoggio } from './VociOfferteAppoggio.Types';


/* --------
* Model Definition
* -------- */
const VociOfferteAppoggio = mongoose.model<IVociOfferteAppoggio>(
  'VociOfferteAppoggio',
  VociOfferteAppoggioSchema as any
) as mongoose.Model<IVociOfferteAppoggio>;

/* --------
* Module Exports
* -------- */
export default VociOfferteAppoggio;

export { VociOfferteAppoggioSchema };

export type TVociOfferteAppoggioModel = Omit<typeof VociOfferteAppoggio, 'traslateAliases'> & {
  translateAliases(raw: Partial<IVociOfferteAppoggio>): any
};

export type TVociOfferteAppoggioDocument = 
& mongoose.Document<any, {}, IVociOfferteAppoggio>
& IVociOfferteAppoggio;

export { IVociOfferteAppoggio };