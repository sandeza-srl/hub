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

export type TDistintaPrimoLivelloModel = typeof DistintaPrimoLivello;

export type TDistintaPrimoLivelloDocument = 
& mongoose.Document<any, {}, IDistintaPrimoLivello>
& IDistintaPrimoLivello;

export { IDistintaPrimoLivello };