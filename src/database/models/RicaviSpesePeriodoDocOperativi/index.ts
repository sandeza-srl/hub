import * as mongoose from 'mongoose';

import RicaviSpesePeriodoDocOperativiSchema from './RicaviSpesePeriodoDocOperativi.Schema';
import type { IRicaviSpesePeriodoDocOperativi } from './RicaviSpesePeriodoDocOperativi.Types';


/* --------
* Model Definition
* -------- */
const RicaviSpesePeriodoDocOperativi = mongoose.model<IRicaviSpesePeriodoDocOperativi>(
  'RicaviSpesePeriodoDocOperativi',
  RicaviSpesePeriodoDocOperativiSchema as any
) as mongoose.Model<IRicaviSpesePeriodoDocOperativi>;

/* --------
* Module Exports
* -------- */
export default RicaviSpesePeriodoDocOperativi;

export { RicaviSpesePeriodoDocOperativiSchema };

export type TRicaviSpesePeriodoDocOperativiModel = Omit<typeof RicaviSpesePeriodoDocOperativi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IRicaviSpesePeriodoDocOperativi>): any
};

export type TRicaviSpesePeriodoDocOperativiDocument = 
& mongoose.Document<any, {}, IRicaviSpesePeriodoDocOperativi>
& IRicaviSpesePeriodoDocOperativi;

export { IRicaviSpesePeriodoDocOperativi };