import * as mongoose from 'mongoose';

import TipiDocumentiRipartitoriSchema from './TipiDocumentiRipartitori.Schema';
import type { ITipiDocumentiRipartitori } from './TipiDocumentiRipartitori.Types';


/* --------
* Model Definition
* -------- */
const TipiDocumentiRipartitori = mongoose.model<ITipiDocumentiRipartitori>(
  'TipiDocumentiRipartitori',
  TipiDocumentiRipartitoriSchema as any
) as mongoose.Model<ITipiDocumentiRipartitori>;

/* --------
* Module Exports
* -------- */
export default TipiDocumentiRipartitori;

export { TipiDocumentiRipartitoriSchema };

export type TTipiDocumentiRipartitoriModel = Omit<typeof TipiDocumentiRipartitori, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiDocumentiRipartitori>): any
};

export type TTipiDocumentiRipartitoriDocument = 
& mongoose.Document<any, {}, ITipiDocumentiRipartitori>
& ITipiDocumentiRipartitori;

export { ITipiDocumentiRipartitori };