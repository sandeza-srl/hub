import * as mongoose from 'mongoose';

import UpdatesContenutiInLinguaSchema from './UpdatesContenutiInLingua.Schema';
import type { IUpdatesContenutiInLingua } from './UpdatesContenutiInLingua.Types';


/* --------
* Model Definition
* -------- */
const UpdatesContenutiInLingua = mongoose.model<IUpdatesContenutiInLingua>(
'UpdatesContenutiInLingua',
UpdatesContenutiInLinguaSchema as any
) as mongoose.Model<IUpdatesContenutiInLingua>;

/* --------
* Module Exports
* -------- */
export default UpdatesContenutiInLingua;

export { UpdatesContenutiInLinguaSchema };

export type TUpdatesContenutiInLinguaModel = Omit<typeof UpdatesContenutiInLingua, 'traslateAliases'> & {
translateAliases(raw: Partial<IUpdatesContenutiInLingua>): any
};

export type TUpdatesContenutiInLinguaDocument = 
& mongoose.Document<any, {}, IUpdatesContenutiInLingua>
& IUpdatesContenutiInLingua;

export { IUpdatesContenutiInLingua };