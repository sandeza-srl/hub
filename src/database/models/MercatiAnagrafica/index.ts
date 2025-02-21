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

export type TMercatiAnagraficaModel = Omit<typeof MercatiAnagrafica, 'traslateAliases'> & {
translateAliases(raw: Partial<IMercatiAnagrafica>): any
};

export type TMercatiAnagraficaDocument = 
& mongoose.Document<any, {}, IMercatiAnagrafica>
& IMercatiAnagrafica;

export { IMercatiAnagrafica };