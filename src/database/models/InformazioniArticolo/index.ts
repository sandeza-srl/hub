import * as mongoose from 'mongoose';

import InformazioniArticoloSchema from './InformazioniArticolo.Schema';
import type { IInformazioniArticolo } from './InformazioniArticolo.Types';


/* --------
* Model Definition
* -------- */
const InformazioniArticolo = mongoose.model<IInformazioniArticolo>(
'InformazioniArticolo',
InformazioniArticoloSchema as any
) as mongoose.Model<IInformazioniArticolo>;

/* --------
* Module Exports
* -------- */
export default InformazioniArticolo;

export { InformazioniArticoloSchema };

export type TInformazioniArticoloModel = Omit<typeof InformazioniArticolo, 'traslateAliases'> & {
translateAliases(raw: Partial<IInformazioniArticolo>): any
};

export type TInformazioniArticoloDocument = 
& mongoose.Document<any, {}, IInformazioniArticolo>
& IInformazioniArticolo;

export { IInformazioniArticolo };