import * as mongoose from 'mongoose';

import InformazioniOfferteRevisioniSchema from './InformazioniOfferteRevisioni.Schema';
import type { IInformazioniOfferteRevisioni } from './InformazioniOfferteRevisioni.Types';


/* --------
* Model Definition
* -------- */
const InformazioniOfferteRevisioni = mongoose.model<IInformazioniOfferteRevisioni>(
  'InformazioniOfferteRevisioni',
  InformazioniOfferteRevisioniSchema as any
) as mongoose.Model<IInformazioniOfferteRevisioni>;

/* --------
* Module Exports
* -------- */
export default InformazioniOfferteRevisioni;

export { InformazioniOfferteRevisioniSchema };

export type TInformazioniOfferteRevisioniModel = Omit<typeof InformazioniOfferteRevisioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IInformazioniOfferteRevisioni>): any
};

export type TInformazioniOfferteRevisioniDocument = 
& mongoose.Document<any, {}, IInformazioniOfferteRevisioni>
& IInformazioniOfferteRevisioni;

export { IInformazioniOfferteRevisioni };