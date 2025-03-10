import * as mongoose from 'mongoose';

import VariazioniListinoSchema from './VariazioniListino.Schema';
import type { IVariazioniListino } from './VariazioniListino.Types';


/* --------
* Model Definition
* -------- */
const VariazioniListino = mongoose.model<IVariazioniListino>(
'VariazioniListino',
VariazioniListinoSchema as any
) as mongoose.Model<IVariazioniListino>;

/* --------
* Module Exports
* -------- */
export default VariazioniListino;

export { VariazioniListinoSchema };

export type TVariazioniListinoModel = Omit<typeof VariazioniListino, 'traslateAliases'> & {
translateAliases(raw: Partial<IVariazioniListino>): any
};

export type TVariazioniListinoDocument = 
& mongoose.Document<any, {}, IVariazioniListino>
& IVariazioniListino;

export { IVariazioniListino };