import * as mongoose from 'mongoose';

import TipiImpiantiSchema from './TipiImpianti.Schema';
import type { ITipiImpianti } from './TipiImpianti.Types';


/* --------
* Model Definition
* -------- */
const TipiImpianti = mongoose.model<ITipiImpianti>(
  'TipiImpianti',
  TipiImpiantiSchema as any
) as mongoose.Model<ITipiImpianti>;

/* --------
* Module Exports
* -------- */
export default TipiImpianti;

export { TipiImpiantiSchema };

export type TTipiImpiantiModel = Omit<typeof TipiImpianti, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiImpianti>): any
};

export type TTipiImpiantiDocument = 
& mongoose.Document<any, {}, ITipiImpianti>
& ITipiImpianti;

export { ITipiImpianti };