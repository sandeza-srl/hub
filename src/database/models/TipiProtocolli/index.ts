import * as mongoose from 'mongoose';

import TipiProtocolliSchema from './TipiProtocolli.Schema';
import type { ITipiProtocolli } from './TipiProtocolli.Types';


/* --------
* Model Definition
* -------- */
const TipiProtocolli = mongoose.model<ITipiProtocolli>(
  'TipiProtocolli',
  TipiProtocolliSchema as any
) as mongoose.Model<ITipiProtocolli>;

/* --------
* Module Exports
* -------- */
export default TipiProtocolli;

export { TipiProtocolliSchema };

export type TTipiProtocolliModel = Omit<typeof TipiProtocolli, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiProtocolli>): any
};

export type TTipiProtocolliDocument = 
& mongoose.Document<any, {}, ITipiProtocolli>
& ITipiProtocolli;

export { ITipiProtocolli };