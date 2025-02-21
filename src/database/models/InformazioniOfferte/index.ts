import * as mongoose from 'mongoose';

import InformazioniOfferteSchema from './InformazioniOfferte.Schema';
import type { IInformazioniOfferte } from './InformazioniOfferte.Types';


/* --------
* Model Definition
* -------- */
const InformazioniOfferte = mongoose.model<IInformazioniOfferte>(
'InformazioniOfferte',
InformazioniOfferteSchema as any
) as mongoose.Model<IInformazioniOfferte>;

/* --------
* Module Exports
* -------- */
export default InformazioniOfferte;

export { InformazioniOfferteSchema };

export type TInformazioniOfferteModel = Omit<typeof InformazioniOfferte, 'traslateAliases'> & {
translateAliases(raw: Partial<IInformazioniOfferte>): any
};

export type TInformazioniOfferteDocument = 
& mongoose.Document<any, {}, IInformazioniOfferte>
& IInformazioniOfferte;

export { IInformazioniOfferte };