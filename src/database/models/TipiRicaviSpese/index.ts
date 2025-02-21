import * as mongoose from 'mongoose';

import TipiRicaviSpeseSchema from './TipiRicaviSpese.Schema';
import type { ITipiRicaviSpese } from './TipiRicaviSpese.Types';


/* --------
* Model Definition
* -------- */
const TipiRicaviSpese = mongoose.model<ITipiRicaviSpese>(
'TipiRicaviSpese',
TipiRicaviSpeseSchema as any
) as mongoose.Model<ITipiRicaviSpese>;

/* --------
* Module Exports
* -------- */
export default TipiRicaviSpese;

export { TipiRicaviSpeseSchema };

export type TTipiRicaviSpeseModel = Omit<typeof TipiRicaviSpese, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiRicaviSpese>): any
};

export type TTipiRicaviSpeseDocument = 
& mongoose.Document<any, {}, ITipiRicaviSpese>
& ITipiRicaviSpese;

export { ITipiRicaviSpese };