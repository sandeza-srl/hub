import * as mongoose from 'mongoose';

import DistintaCompletaSchema from './DistintaCompleta.Schema';
import type { IDistintaCompleta } from './DistintaCompleta.Types';


/* --------
* Model Definition
* -------- */
const DistintaCompleta = mongoose.model<IDistintaCompleta>(
  'DistintaCompleta',
  DistintaCompletaSchema as any
) as mongoose.Model<IDistintaCompleta>;

/* --------
* Module Exports
* -------- */
export default DistintaCompleta;

export { DistintaCompletaSchema };

export type TDistintaCompletaModel = typeof DistintaCompleta;

export type TDistintaCompletaDocument = 
& mongoose.Document<any, {}, IDistintaCompleta>
& IDistintaCompleta;

export { IDistintaCompleta };