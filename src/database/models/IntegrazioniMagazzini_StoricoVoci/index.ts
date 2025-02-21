import * as mongoose from 'mongoose';

import IntegrazioniMagazzini_StoricoVociSchema from './IntegrazioniMagazzini_StoricoVoci.Schema';
import type { IIntegrazioniMagazzini_StoricoVoci } from './IntegrazioniMagazzini_StoricoVoci.Types';


/* --------
* Model Definition
* -------- */
const IntegrazioniMagazzini_StoricoVoci = mongoose.model<IIntegrazioniMagazzini_StoricoVoci>(
'IntegrazioniMagazzini_StoricoVoci',
IntegrazioniMagazzini_StoricoVociSchema as any
) as mongoose.Model<IIntegrazioniMagazzini_StoricoVoci>;

/* --------
* Module Exports
* -------- */
export default IntegrazioniMagazzini_StoricoVoci;

export { IntegrazioniMagazzini_StoricoVociSchema };

export type TIntegrazioniMagazzini_StoricoVociModel = Omit<typeof IntegrazioniMagazzini_StoricoVoci, 'traslateAliases'> & {
translateAliases(raw: Partial<IIntegrazioniMagazzini_StoricoVoci>): any
};

export type TIntegrazioniMagazzini_StoricoVociDocument = 
& mongoose.Document<any, {}, IIntegrazioniMagazzini_StoricoVoci>
& IIntegrazioniMagazzini_StoricoVoci;

export { IIntegrazioniMagazzini_StoricoVoci };