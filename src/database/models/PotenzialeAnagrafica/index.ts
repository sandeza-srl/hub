import * as mongoose from 'mongoose';

import PotenzialeAnagraficaSchema from './PotenzialeAnagrafica.Schema';
import type { IPotenzialeAnagrafica } from './PotenzialeAnagrafica.Types';


/* --------
* Model Definition
* -------- */
const PotenzialeAnagrafica = mongoose.model<IPotenzialeAnagrafica>(
  'PotenzialeAnagrafica',
  PotenzialeAnagraficaSchema as any
) as mongoose.Model<IPotenzialeAnagrafica>;

/* --------
* Module Exports
* -------- */
export default PotenzialeAnagrafica;

export { PotenzialeAnagraficaSchema };

export type TPotenzialeAnagraficaModel = typeof PotenzialeAnagrafica;

export type TPotenzialeAnagraficaDocument = 
& mongoose.Document<any, {}, IPotenzialeAnagrafica>
& IPotenzialeAnagrafica;

export { IPotenzialeAnagrafica };