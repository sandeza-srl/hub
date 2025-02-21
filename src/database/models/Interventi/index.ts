import * as mongoose from 'mongoose';

import InterventiSchema from './Interventi.Schema';
import type { IInterventi } from './Interventi.Types';


/* --------
* Model Definition
* -------- */
const Interventi = mongoose.model<IInterventi>(
'Interventi',
InterventiSchema as any
) as mongoose.Model<IInterventi>;

/* --------
* Module Exports
* -------- */
export default Interventi;

export { InterventiSchema };

export type TInterventiModel = Omit<typeof Interventi, 'traslateAliases'> & {
translateAliases(raw: Partial<IInterventi>): any
};

export type TInterventiDocument = 
& mongoose.Document<any, {}, IInterventi>
& IInterventi;

export { IInterventi };