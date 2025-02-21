import * as mongoose from 'mongoose';

import TipiGruppiLavoroSchema from './TipiGruppiLavoro.Schema';
import type { ITipiGruppiLavoro } from './TipiGruppiLavoro.Types';


/* --------
* Model Definition
* -------- */
const TipiGruppiLavoro = mongoose.model<ITipiGruppiLavoro>(
'TipiGruppiLavoro',
TipiGruppiLavoroSchema as any
) as mongoose.Model<ITipiGruppiLavoro>;

/* --------
* Module Exports
* -------- */
export default TipiGruppiLavoro;

export { TipiGruppiLavoroSchema };

export type TTipiGruppiLavoroModel = Omit<typeof TipiGruppiLavoro, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiGruppiLavoro>): any
};

export type TTipiGruppiLavoroDocument = 
& mongoose.Document<any, {}, ITipiGruppiLavoro>
& ITipiGruppiLavoro;

export { ITipiGruppiLavoro };