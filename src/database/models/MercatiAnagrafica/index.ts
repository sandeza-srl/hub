import * as mongoose from 'mongoose';

import MercatiAnagraficaSchema from './MercatiAnagrafica.Schema';
import type { IMercatiAnagrafica } from './MercatiAnagrafica.Types';


/* --------
* Model Definition
* -------- */
const MercatiAnagrafica = mongoose.model<IMercatiAnagrafica>(
  'MercatiAnagrafica',
  MercatiAnagraficaSchema as any
) as mongoose.Model<IMercatiAnagrafica>;

/* --------
* Module Exports
* -------- */
export default MercatiAnagrafica;

export { MercatiAnagraficaSchema };

export type TMercatiAnagraficaModel = typeof MercatiAnagrafica;

export type TMercatiAnagraficaDocument = 
& mongoose.Document<any, {}, IMercatiAnagrafica>
& IMercatiAnagrafica;

export { IMercatiAnagrafica };