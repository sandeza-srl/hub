import * as mongoose from 'mongoose';

import TipiEtichetteLavorazioniTipiFasiSchema from './TipiEtichetteLavorazioniTipiFasi.Schema';
import type { ITipiEtichetteLavorazioniTipiFasi } from './TipiEtichetteLavorazioniTipiFasi.Types';


/* --------
* Model Definition
* -------- */
const TipiEtichetteLavorazioniTipiFasi = mongoose.model<ITipiEtichetteLavorazioniTipiFasi>(
'TipiEtichetteLavorazioniTipiFasi',
TipiEtichetteLavorazioniTipiFasiSchema as any
) as mongoose.Model<ITipiEtichetteLavorazioniTipiFasi>;

/* --------
* Module Exports
* -------- */
export default TipiEtichetteLavorazioniTipiFasi;

export { TipiEtichetteLavorazioniTipiFasiSchema };

export type TTipiEtichetteLavorazioniTipiFasiModel = Omit<typeof TipiEtichetteLavorazioniTipiFasi, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiEtichetteLavorazioniTipiFasi>): any
};

export type TTipiEtichetteLavorazioniTipiFasiDocument = 
& mongoose.Document<any, {}, ITipiEtichetteLavorazioniTipiFasi>
& ITipiEtichetteLavorazioniTipiFasi;

export { ITipiEtichetteLavorazioniTipiFasi };