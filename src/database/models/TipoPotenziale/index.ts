import * as mongoose from 'mongoose';

import TipoPotenzialeSchema from './TipoPotenziale.Schema';
import type { ITipoPotenziale } from './TipoPotenziale.Types';


/* --------
* Model Definition
* -------- */
const TipoPotenziale = mongoose.model<ITipoPotenziale>(
  'TipoPotenziale',
  TipoPotenzialeSchema as any
) as mongoose.Model<ITipoPotenziale>;

/* --------
* Module Exports
* -------- */
export default TipoPotenziale;

export { TipoPotenzialeSchema };

export type TTipoPotenzialeModel = Omit<typeof TipoPotenziale, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipoPotenziale>): any
};

export type TTipoPotenzialeDocument = 
& mongoose.Document<any, {}, ITipoPotenziale>
& ITipoPotenziale;

export { ITipoPotenziale };