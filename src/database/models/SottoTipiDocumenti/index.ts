import * as mongoose from 'mongoose';

import SottoTipiDocumentiSchema from './SottoTipiDocumenti.Schema';
import type { ISottoTipiDocumenti } from './SottoTipiDocumenti.Types';


/* --------
* Model Definition
* -------- */
const SottoTipiDocumenti = mongoose.model<ISottoTipiDocumenti>(
'SottoTipiDocumenti',
SottoTipiDocumentiSchema as any
) as mongoose.Model<ISottoTipiDocumenti>;

/* --------
* Module Exports
* -------- */
export default SottoTipiDocumenti;

export { SottoTipiDocumentiSchema };

export type TSottoTipiDocumentiModel = Omit<typeof SottoTipiDocumenti, 'traslateAliases'> & {
translateAliases(raw: Partial<ISottoTipiDocumenti>): any
};

export type TSottoTipiDocumentiDocument = 
& mongoose.Document<any, {}, ISottoTipiDocumenti>
& ISottoTipiDocumenti;

export { ISottoTipiDocumenti };