import * as mongoose from 'mongoose';

import TipiMercatiSchema from './TipiMercati.Schema';
import type { ITipiMercati } from './TipiMercati.Types';


/* --------
* Model Definition
* -------- */
const TipiMercati = mongoose.model<ITipiMercati>(
  'TipiMercati',
  TipiMercatiSchema as any
) as mongoose.Model<ITipiMercati>;

/* --------
* Module Exports
* -------- */
export default TipiMercati;

export { TipiMercatiSchema };

export type TTipiMercatiModel = Omit<typeof TipiMercati, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiMercati>): any
};

export type TTipiMercatiDocument = 
& mongoose.Document<any, {}, ITipiMercati>
& ITipiMercati;

export { ITipiMercati };