import * as mongoose from 'mongoose';

import AnalisiCostoArticoliSchema from './AnalisiCostoArticoli.Schema';
import type { IAnalisiCostoArticoli } from './AnalisiCostoArticoli.Types';


/* --------
* Model Definition
* -------- */
const AnalisiCostoArticoli = mongoose.model<IAnalisiCostoArticoli>(
  'AnalisiCostoArticoli',
  AnalisiCostoArticoliSchema as any
) as mongoose.Model<IAnalisiCostoArticoli>;

/* --------
* Module Exports
* -------- */
export default AnalisiCostoArticoli;

export { AnalisiCostoArticoliSchema };

export type TAnalisiCostoArticoliModel = typeof AnalisiCostoArticoli;

export type TAnalisiCostoArticoliDocument = 
& mongoose.Document<any, {}, IAnalisiCostoArticoli>
& IAnalisiCostoArticoli;

export { IAnalisiCostoArticoli };