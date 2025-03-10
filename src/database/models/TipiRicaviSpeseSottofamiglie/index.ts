import * as mongoose from 'mongoose';

import TipiRicaviSpeseSottofamiglieSchema from './TipiRicaviSpeseSottofamiglie.Schema';
import type { ITipiRicaviSpeseSottofamiglie } from './TipiRicaviSpeseSottofamiglie.Types';


/* --------
* Model Definition
* -------- */
const TipiRicaviSpeseSottofamiglie = mongoose.model<ITipiRicaviSpeseSottofamiglie>(
'TipiRicaviSpeseSottofamiglie',
TipiRicaviSpeseSottofamiglieSchema as any
) as mongoose.Model<ITipiRicaviSpeseSottofamiglie>;

/* --------
* Module Exports
* -------- */
export default TipiRicaviSpeseSottofamiglie;

export { TipiRicaviSpeseSottofamiglieSchema };

export type TTipiRicaviSpeseSottofamiglieModel = Omit<typeof TipiRicaviSpeseSottofamiglie, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiRicaviSpeseSottofamiglie>): any
};

export type TTipiRicaviSpeseSottofamiglieDocument = 
& mongoose.Document<any, {}, ITipiRicaviSpeseSottofamiglie>
& ITipiRicaviSpeseSottofamiglie;

export { ITipiRicaviSpeseSottofamiglie };