import * as mongoose from 'mongoose';

import TipologiaAnagraficaSchema from './TipologiaAnagrafica.Schema';
import type { ITipologiaAnagrafica } from './TipologiaAnagrafica.Types';


/* --------
* Model Definition
* -------- */
const TipologiaAnagrafica = mongoose.model<ITipologiaAnagrafica>(
  'TipologiaAnagrafica',
  TipologiaAnagraficaSchema as any
) as mongoose.Model<ITipologiaAnagrafica>;

/* --------
* Module Exports
* -------- */
export default TipologiaAnagrafica;

export { TipologiaAnagraficaSchema };

export type TTipologiaAnagraficaModel = typeof TipologiaAnagrafica;

export type TTipologiaAnagraficaDocument = 
& mongoose.Document<any, {}, ITipologiaAnagrafica>
& ITipologiaAnagrafica;

export { ITipologiaAnagrafica };