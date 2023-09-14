import * as mongoose from 'mongoose';

import TipiInfoAggiuntiveSchema from './TipiInfoAggiuntive.Schema';
import type { ITipiInfoAggiuntive } from './TipiInfoAggiuntive.Types';


/* --------
* Model Definition
* -------- */
const TipiInfoAggiuntive = mongoose.model<ITipiInfoAggiuntive>(
  'TipiInfoAggiuntive',
  TipiInfoAggiuntiveSchema as any
) as mongoose.Model<ITipiInfoAggiuntive>;

/* --------
* Module Exports
* -------- */
export default TipiInfoAggiuntive;

export { TipiInfoAggiuntiveSchema };

export type TTipiInfoAggiuntiveModel = Omit<typeof TipiInfoAggiuntive, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiInfoAggiuntive>): any
};

export type TTipiInfoAggiuntiveDocument = 
& mongoose.Document<any, {}, ITipiInfoAggiuntive>
& ITipiInfoAggiuntive;

export { ITipiInfoAggiuntive };