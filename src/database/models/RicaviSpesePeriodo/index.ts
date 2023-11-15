import * as mongoose from 'mongoose';

import RicaviSpesePeriodoSchema from './RicaviSpesePeriodo.Schema';
import type { IRicaviSpesePeriodo } from './RicaviSpesePeriodo.Types';


/* --------
* Model Definition
* -------- */
const RicaviSpesePeriodo = mongoose.model<IRicaviSpesePeriodo>(
  'RicaviSpesePeriodo',
  RicaviSpesePeriodoSchema as any
) as mongoose.Model<IRicaviSpesePeriodo>;

/* --------
* Module Exports
* -------- */
export default RicaviSpesePeriodo;

export { RicaviSpesePeriodoSchema };

export type TRicaviSpesePeriodoModel = Omit<typeof RicaviSpesePeriodo, 'traslateAliases'> & {
  translateAliases(raw: Partial<IRicaviSpesePeriodo>): any
};

export type TRicaviSpesePeriodoDocument = 
& mongoose.Document<any, {}, IRicaviSpesePeriodo>
& IRicaviSpesePeriodo;

export { IRicaviSpesePeriodo };