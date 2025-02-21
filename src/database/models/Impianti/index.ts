import * as mongoose from 'mongoose';

import ImpiantiSchema from './Impianti.Schema';
import type { IImpianti } from './Impianti.Types';


/* --------
* Model Definition
* -------- */
const Impianti = mongoose.model<IImpianti>(
'Impianti',
ImpiantiSchema as any
) as mongoose.Model<IImpianti>;

/* --------
* Module Exports
* -------- */
export default Impianti;

export { ImpiantiSchema };

export type TImpiantiModel = Omit<typeof Impianti, 'traslateAliases'> & {
translateAliases(raw: Partial<IImpianti>): any
};

export type TImpiantiDocument = 
& mongoose.Document<any, {}, IImpianti>
& IImpianti;

export { IImpianti };