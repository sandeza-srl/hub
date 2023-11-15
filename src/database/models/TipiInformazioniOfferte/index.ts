import * as mongoose from 'mongoose';

import TipiInformazioniOfferteSchema from './TipiInformazioniOfferte.Schema';
import type { ITipiInformazioniOfferte } from './TipiInformazioniOfferte.Types';


/* --------
* Model Definition
* -------- */
const TipiInformazioniOfferte = mongoose.model<ITipiInformazioniOfferte>(
  'TipiInformazioniOfferte',
  TipiInformazioniOfferteSchema as any
) as mongoose.Model<ITipiInformazioniOfferte>;

/* --------
* Module Exports
* -------- */
export default TipiInformazioniOfferte;

export { TipiInformazioniOfferteSchema };

export type TTipiInformazioniOfferteModel = Omit<typeof TipiInformazioniOfferte, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiInformazioniOfferte>): any
};

export type TTipiInformazioniOfferteDocument = 
& mongoose.Document<any, {}, ITipiInformazioniOfferte>
& ITipiInformazioniOfferte;

export { ITipiInformazioniOfferte };