import * as mongoose from 'mongoose';

import TipiCicliSchema from './TipiCicli.Schema';
import type { ITipiCicli } from './TipiCicli.Types';


/* --------
* Model Definition
* -------- */
const TipiCicli = mongoose.model<ITipiCicli>(
'TipiCicli',
TipiCicliSchema as any
) as mongoose.Model<ITipiCicli>;

/* --------
* Module Exports
* -------- */
export default TipiCicli;

export { TipiCicliSchema };

export type TTipiCicliModel = Omit<typeof TipiCicli, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiCicli>): any
};

export type TTipiCicliDocument = 
& mongoose.Document<any, {}, ITipiCicli>
& ITipiCicli;

export { ITipiCicli };