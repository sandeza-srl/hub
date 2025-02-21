import * as mongoose from 'mongoose';

import TipiStatiStrumentiSchema from './TipiStatiStrumenti.Schema';
import type { ITipiStatiStrumenti } from './TipiStatiStrumenti.Types';


/* --------
* Model Definition
* -------- */
const TipiStatiStrumenti = mongoose.model<ITipiStatiStrumenti>(
'TipiStatiStrumenti',
TipiStatiStrumentiSchema as any
) as mongoose.Model<ITipiStatiStrumenti>;

/* --------
* Module Exports
* -------- */
export default TipiStatiStrumenti;

export { TipiStatiStrumentiSchema };

export type TTipiStatiStrumentiModel = Omit<typeof TipiStatiStrumenti, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiStatiStrumenti>): any
};

export type TTipiStatiStrumentiDocument = 
& mongoose.Document<any, {}, ITipiStatiStrumenti>
& ITipiStatiStrumenti;

export { ITipiStatiStrumenti };