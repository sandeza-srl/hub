import * as mongoose from 'mongoose';

import AnagraficaSchema from './Anagrafica.Schema';
import type { IAnagrafica } from './Anagrafica.Types';


/* --------
* Model Definition
* -------- */
const Anagrafica = mongoose.model<IAnagrafica>(
  'Anagrafica',
  AnagraficaSchema as any
) as mongoose.Model<IAnagrafica>;

/* --------
* Module Exports
* -------- */
export default Anagrafica;

export { AnagraficaSchema };

export type TAnagraficaModel = Omit<typeof Anagrafica, 'traslateAliases'> & {
  translateAliases(raw: Partial<IAnagrafica>): any
};

export type TAnagraficaDocument =
  & mongoose.Document<any, {}, IAnagrafica>
  & IAnagrafica;

export { IAnagrafica };
