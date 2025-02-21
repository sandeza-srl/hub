import * as mongoose from 'mongoose';

import TipiEtichetteLavorazioniSchema from './TipiEtichetteLavorazioni.Schema';
import type { ITipiEtichetteLavorazioni } from './TipiEtichetteLavorazioni.Types';


/* --------
* Model Definition
* -------- */
const TipiEtichetteLavorazioni = mongoose.model<ITipiEtichetteLavorazioni>(
'TipiEtichetteLavorazioni',
TipiEtichetteLavorazioniSchema as any
) as mongoose.Model<ITipiEtichetteLavorazioni>;

/* --------
* Module Exports
* -------- */
export default TipiEtichetteLavorazioni;

export { TipiEtichetteLavorazioniSchema };

export type TTipiEtichetteLavorazioniModel = Omit<typeof TipiEtichetteLavorazioni, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiEtichetteLavorazioni>): any
};

export type TTipiEtichetteLavorazioniDocument = 
& mongoose.Document<any, {}, ITipiEtichetteLavorazioni>
& ITipiEtichetteLavorazioni;

export { ITipiEtichetteLavorazioni };