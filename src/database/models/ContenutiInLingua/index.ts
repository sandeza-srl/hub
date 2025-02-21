import * as mongoose from 'mongoose';

import ContenutiInLinguaSchema from './ContenutiInLingua.Schema';
import type { IContenutiInLingua } from './ContenutiInLingua.Types';


/* --------
* Model Definition
* -------- */
const ContenutiInLingua = mongoose.model<IContenutiInLingua>(
'ContenutiInLingua',
ContenutiInLinguaSchema as any
) as mongoose.Model<IContenutiInLingua>;

/* --------
* Module Exports
* -------- */
export default ContenutiInLingua;

export { ContenutiInLinguaSchema };

export type TContenutiInLinguaModel = Omit<typeof ContenutiInLingua, 'traslateAliases'> & {
translateAliases(raw: Partial<IContenutiInLingua>): any
};

export type TContenutiInLinguaDocument = 
& mongoose.Document<any, {}, IContenutiInLingua>
& IContenutiInLingua;

export { IContenutiInLingua };