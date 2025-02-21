import * as mongoose from 'mongoose';

import DichiarazioniIntentoSchema from './DichiarazioniIntento.Schema';
import type { IDichiarazioniIntento } from './DichiarazioniIntento.Types';


/* --------
* Model Definition
* -------- */
const DichiarazioniIntento = mongoose.model<IDichiarazioniIntento>(
'DichiarazioniIntento',
DichiarazioniIntentoSchema as any
) as mongoose.Model<IDichiarazioniIntento>;

/* --------
* Module Exports
* -------- */
export default DichiarazioniIntento;

export { DichiarazioniIntentoSchema };

export type TDichiarazioniIntentoModel = Omit<typeof DichiarazioniIntento, 'traslateAliases'> & {
translateAliases(raw: Partial<IDichiarazioniIntento>): any
};

export type TDichiarazioniIntentoDocument = 
& mongoose.Document<any, {}, IDichiarazioniIntento>
& IDichiarazioniIntento;

export { IDichiarazioniIntento };