import * as mongoose from 'mongoose';

import StoricoTipoAnagraficaSchema from './StoricoTipoAnagrafica.Schema';
import type { IStoricoTipoAnagrafica } from './StoricoTipoAnagrafica.Types';


/* --------
* Model Definition
* -------- */
const StoricoTipoAnagrafica = mongoose.model<IStoricoTipoAnagrafica>(
  'StoricoTipoAnagrafica',
  StoricoTipoAnagraficaSchema as any
) as mongoose.Model<IStoricoTipoAnagrafica>;

/* --------
* Module Exports
* -------- */
export default StoricoTipoAnagrafica;

export { StoricoTipoAnagraficaSchema };

export type TStoricoTipoAnagraficaModel = Omit<typeof StoricoTipoAnagrafica, 'traslateAliases'> & {
  translateAliases(raw: Partial<IStoricoTipoAnagrafica>): any
};

export type TStoricoTipoAnagraficaDocument = 
& mongoose.Document<any, {}, IStoricoTipoAnagrafica>
& IStoricoTipoAnagrafica;

export { IStoricoTipoAnagrafica };