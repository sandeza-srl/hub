import * as mongoose from 'mongoose';

import InfoAggiuntiveTipiImpiantiSchema from './InfoAggiuntiveTipiImpianti.Schema';
import type { IInfoAggiuntiveTipiImpianti } from './InfoAggiuntiveTipiImpianti.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveTipiImpianti = mongoose.model<IInfoAggiuntiveTipiImpianti>(
  'InfoAggiuntiveTipiImpianti',
  InfoAggiuntiveTipiImpiantiSchema as any
) as mongoose.Model<IInfoAggiuntiveTipiImpianti>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveTipiImpianti;

export { InfoAggiuntiveTipiImpiantiSchema };

export type TInfoAggiuntiveTipiImpiantiModel = typeof InfoAggiuntiveTipiImpianti;

export type TInfoAggiuntiveTipiImpiantiDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveTipiImpianti>
& IInfoAggiuntiveTipiImpianti;

export { IInfoAggiuntiveTipiImpianti };