import * as mongoose from 'mongoose';

import AnalisiCostoArticoli_CommentiSchema from './AnalisiCostoArticoli_Commenti.Schema';
import type { IAnalisiCostoArticoli_Commenti } from './AnalisiCostoArticoli_Commenti.Types';


/* --------
* Model Definition
* -------- */
const AnalisiCostoArticoli_Commenti = mongoose.model<IAnalisiCostoArticoli_Commenti>(
'AnalisiCostoArticoli_Commenti',
AnalisiCostoArticoli_CommentiSchema as any
) as mongoose.Model<IAnalisiCostoArticoli_Commenti>;

/* --------
* Module Exports
* -------- */
export default AnalisiCostoArticoli_Commenti;

export { AnalisiCostoArticoli_CommentiSchema };

export type TAnalisiCostoArticoli_CommentiModel = Omit<typeof AnalisiCostoArticoli_Commenti, 'traslateAliases'> & {
translateAliases(raw: Partial<IAnalisiCostoArticoli_Commenti>): any
};

export type TAnalisiCostoArticoli_CommentiDocument = 
& mongoose.Document<any, {}, IAnalisiCostoArticoli_Commenti>
& IAnalisiCostoArticoli_Commenti;

export { IAnalisiCostoArticoli_Commenti };