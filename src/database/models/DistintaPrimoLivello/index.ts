import * as mongoose from 'mongoose';

import DistintaPrimoLivelloSchema from './DistintaPrimoLivello.Schema';
import type { IDistintaPrimoLivello } from './DistintaPrimoLivello.Types';


/* --------
* Model Definition
* -------- */
const DistintaPrimoLivello = mongoose.model<IDistintaPrimoLivello>(
'DistintaPrimoLivello',
DistintaPrimoLivelloSchema as any
) as mongoose.Model<IDistintaPrimoLivello>;

/* --------
* Module Exports
* -------- */
export default DistintaPrimoLivello;

export { DistintaPrimoLivelloSchema };

export type TDistintaPrimoLivelloModel = Omit<typeof DistintaPrimoLivello, 'traslateAliases'> & {
translateAliases(raw: Partial<IDistintaPrimoLivello>): any
};

export type TDistintaPrimoLivelloDocument = 
& mongoose.Document<any, {}, IDistintaPrimoLivello>
& IDistintaPrimoLivello;

export { IDistintaPrimoLivello };