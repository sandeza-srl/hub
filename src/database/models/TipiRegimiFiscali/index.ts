import * as mongoose from 'mongoose';

import TipiRegimiFiscaliSchema from './TipiRegimiFiscali.Schema';
import type { ITipiRegimiFiscali } from './TipiRegimiFiscali.Types';


/* --------
* Model Definition
* -------- */
const TipiRegimiFiscali = mongoose.model<ITipiRegimiFiscali>(
  'TipiRegimiFiscali',
  TipiRegimiFiscaliSchema as any
) as mongoose.Model<ITipiRegimiFiscali>;

/* --------
* Module Exports
* -------- */
export default TipiRegimiFiscali;

export { TipiRegimiFiscaliSchema };

export type TTipiRegimiFiscaliModel = Omit<typeof TipiRegimiFiscali, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiRegimiFiscali>): any
};

export type TTipiRegimiFiscaliDocument = 
& mongoose.Document<any, {}, ITipiRegimiFiscali>
& ITipiRegimiFiscali;

export { ITipiRegimiFiscali };