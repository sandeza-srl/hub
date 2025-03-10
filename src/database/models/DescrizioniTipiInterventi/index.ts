import * as mongoose from 'mongoose';

import DescrizioniTipiInterventiSchema from './DescrizioniTipiInterventi.Schema';
import type { IDescrizioniTipiInterventi } from './DescrizioniTipiInterventi.Types';


/* --------
* Model Definition
* -------- */
const DescrizioniTipiInterventi = mongoose.model<IDescrizioniTipiInterventi>(
'DescrizioniTipiInterventi',
DescrizioniTipiInterventiSchema as any
) as mongoose.Model<IDescrizioniTipiInterventi>;

/* --------
* Module Exports
* -------- */
export default DescrizioniTipiInterventi;

export { DescrizioniTipiInterventiSchema };

export type TDescrizioniTipiInterventiModel = Omit<typeof DescrizioniTipiInterventi, 'traslateAliases'> & {
translateAliases(raw: Partial<IDescrizioniTipiInterventi>): any
};

export type TDescrizioniTipiInterventiDocument = 
& mongoose.Document<any, {}, IDescrizioniTipiInterventi>
& IDescrizioniTipiInterventi;

export { IDescrizioniTipiInterventi };