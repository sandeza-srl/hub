import * as mongoose from 'mongoose';

import ComunicazioniAnagraficaSchema from './ComunicazioniAnagrafica.Schema';
import type { IComunicazioniAnagrafica } from './ComunicazioniAnagrafica.Types';


/* --------
* Model Definition
* -------- */
const ComunicazioniAnagrafica = mongoose.model<IComunicazioniAnagrafica>(
  'ComunicazioniAnagrafica',
  ComunicazioniAnagraficaSchema as any
) as mongoose.Model<IComunicazioniAnagrafica>;

/* --------
* Module Exports
* -------- */
export default ComunicazioniAnagrafica;

export { ComunicazioniAnagraficaSchema };

export type TComunicazioniAnagraficaModel = typeof ComunicazioniAnagrafica;

export type TComunicazioniAnagraficaDocument = 
& mongoose.Document<any, {}, IComunicazioniAnagrafica>
& IComunicazioniAnagrafica;

export { IComunicazioniAnagrafica };