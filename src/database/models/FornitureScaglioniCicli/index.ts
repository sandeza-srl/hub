import * as mongoose from 'mongoose';

import FornitureScaglioniCicliSchema from './FornitureScaglioniCicli.Schema';
import type { IFornitureScaglioniCicli } from './FornitureScaglioniCicli.Types';


/* --------
* Model Definition
* -------- */
const FornitureScaglioniCicli = mongoose.model<IFornitureScaglioniCicli>(
'FornitureScaglioniCicli',
FornitureScaglioniCicliSchema as any
) as mongoose.Model<IFornitureScaglioniCicli>;

/* --------
* Module Exports
* -------- */
export default FornitureScaglioniCicli;

export { FornitureScaglioniCicliSchema };

export type TFornitureScaglioniCicliModel = Omit<typeof FornitureScaglioniCicli, 'traslateAliases'> & {
translateAliases(raw: Partial<IFornitureScaglioniCicli>): any
};

export type TFornitureScaglioniCicliDocument = 
& mongoose.Document<any, {}, IFornitureScaglioniCicli>
& IFornitureScaglioniCicli;

export { IFornitureScaglioniCicli };