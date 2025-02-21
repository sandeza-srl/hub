import * as mongoose from 'mongoose';

import StoricoStatoUtensileSchema from './StoricoStatoUtensile.Schema';
import type { IStoricoStatoUtensile } from './StoricoStatoUtensile.Types';


/* --------
* Model Definition
* -------- */
const StoricoStatoUtensile = mongoose.model<IStoricoStatoUtensile>(
'StoricoStatoUtensile',
StoricoStatoUtensileSchema as any
) as mongoose.Model<IStoricoStatoUtensile>;

/* --------
* Module Exports
* -------- */
export default StoricoStatoUtensile;

export { StoricoStatoUtensileSchema };

export type TStoricoStatoUtensileModel = Omit<typeof StoricoStatoUtensile, 'traslateAliases'> & {
translateAliases(raw: Partial<IStoricoStatoUtensile>): any
};

export type TStoricoStatoUtensileDocument = 
& mongoose.Document<any, {}, IStoricoStatoUtensile>
& IStoricoStatoUtensile;

export { IStoricoStatoUtensile };