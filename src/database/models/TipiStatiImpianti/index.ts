import * as mongoose from 'mongoose';

import TipiStatiImpiantiSchema from './TipiStatiImpianti.Schema';
import type { ITipiStatiImpianti } from './TipiStatiImpianti.Types';


/* --------
* Model Definition
* -------- */
const TipiStatiImpianti = mongoose.model<ITipiStatiImpianti>(
'TipiStatiImpianti',
TipiStatiImpiantiSchema as any
) as mongoose.Model<ITipiStatiImpianti>;

/* --------
* Module Exports
* -------- */
export default TipiStatiImpianti;

export { TipiStatiImpiantiSchema };

export type TTipiStatiImpiantiModel = Omit<typeof TipiStatiImpianti, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiStatiImpianti>): any
};

export type TTipiStatiImpiantiDocument = 
& mongoose.Document<any, {}, ITipiStatiImpianti>
& ITipiStatiImpianti;

export { ITipiStatiImpianti };