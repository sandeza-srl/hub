import * as mongoose from 'mongoose';

import TipiRuoliTipiGruppoLavoroSchema from './TipiRuoliTipiGruppoLavoro.Schema';
import type { ITipiRuoliTipiGruppoLavoro } from './TipiRuoliTipiGruppoLavoro.Types';


/* --------
* Model Definition
* -------- */
const TipiRuoliTipiGruppoLavoro = mongoose.model<ITipiRuoliTipiGruppoLavoro>(
'TipiRuoliTipiGruppoLavoro',
TipiRuoliTipiGruppoLavoroSchema as any
) as mongoose.Model<ITipiRuoliTipiGruppoLavoro>;

/* --------
* Module Exports
* -------- */
export default TipiRuoliTipiGruppoLavoro;

export { TipiRuoliTipiGruppoLavoroSchema };

export type TTipiRuoliTipiGruppoLavoroModel = Omit<typeof TipiRuoliTipiGruppoLavoro, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiRuoliTipiGruppoLavoro>): any
};

export type TTipiRuoliTipiGruppoLavoroDocument = 
& mongoose.Document<any, {}, ITipiRuoliTipiGruppoLavoro>
& ITipiRuoliTipiGruppoLavoro;

export { ITipiRuoliTipiGruppoLavoro };