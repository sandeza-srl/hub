import * as mongoose from 'mongoose';

import TipiDocumentiSchema from './TipiDocumenti.Schema';
import type { ITipiDocumenti } from './TipiDocumenti.Types';


/* --------
* Model Definition
* -------- */
const TipiDocumenti = mongoose.model<ITipiDocumenti>(
'TipiDocumenti',
TipiDocumentiSchema as any
) as mongoose.Model<ITipiDocumenti>;

/* --------
* Module Exports
* -------- */
export default TipiDocumenti;

export { TipiDocumentiSchema };

export type TTipiDocumentiModel = Omit<typeof TipiDocumenti, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiDocumenti>): any
};

export type TTipiDocumentiDocument = 
& mongoose.Document<any, {}, ITipiDocumenti>
& ITipiDocumenti;

export { ITipiDocumenti };