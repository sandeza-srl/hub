import * as mongoose from 'mongoose';

import TipiAccessiPostazioniOrigineSchema from './TipiAccessiPostazioniOrigine.Schema';
import type { ITipiAccessiPostazioniOrigine } from './TipiAccessiPostazioniOrigine.Types';


/* --------
* Model Definition
* -------- */
const TipiAccessiPostazioniOrigine = mongoose.model<ITipiAccessiPostazioniOrigine>(
'TipiAccessiPostazioniOrigine',
TipiAccessiPostazioniOrigineSchema as any
) as mongoose.Model<ITipiAccessiPostazioniOrigine>;

/* --------
* Module Exports
* -------- */
export default TipiAccessiPostazioniOrigine;

export { TipiAccessiPostazioniOrigineSchema };

export type TTipiAccessiPostazioniOrigineModel = Omit<typeof TipiAccessiPostazioniOrigine, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiAccessiPostazioniOrigine>): any
};

export type TTipiAccessiPostazioniOrigineDocument = 
& mongoose.Document<any, {}, ITipiAccessiPostazioniOrigine>
& ITipiAccessiPostazioniOrigine;

export { ITipiAccessiPostazioniOrigine };