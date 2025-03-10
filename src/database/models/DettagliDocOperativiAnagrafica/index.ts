import * as mongoose from 'mongoose';

import DettagliDocOperativiAnagraficaSchema from './DettagliDocOperativiAnagrafica.Schema';
import type { IDettagliDocOperativiAnagrafica } from './DettagliDocOperativiAnagrafica.Types';


/* --------
* Model Definition
* -------- */
const DettagliDocOperativiAnagrafica = mongoose.model<IDettagliDocOperativiAnagrafica>(
'DettagliDocOperativiAnagrafica',
DettagliDocOperativiAnagraficaSchema as any
) as mongoose.Model<IDettagliDocOperativiAnagrafica>;

/* --------
* Module Exports
* -------- */
export default DettagliDocOperativiAnagrafica;

export { DettagliDocOperativiAnagraficaSchema };

export type TDettagliDocOperativiAnagraficaModel = Omit<typeof DettagliDocOperativiAnagrafica, 'traslateAliases'> & {
translateAliases(raw: Partial<IDettagliDocOperativiAnagrafica>): any
};

export type TDettagliDocOperativiAnagraficaDocument = 
& mongoose.Document<any, {}, IDettagliDocOperativiAnagrafica>
& IDettagliDocOperativiAnagrafica;

export { IDettagliDocOperativiAnagrafica };