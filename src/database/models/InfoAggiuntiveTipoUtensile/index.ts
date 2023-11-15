import * as mongoose from 'mongoose';

import InfoAggiuntiveTipoUtensileSchema from './InfoAggiuntiveTipoUtensile.Schema';
import type { IInfoAggiuntiveTipoUtensile } from './InfoAggiuntiveTipoUtensile.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveTipoUtensile = mongoose.model<IInfoAggiuntiveTipoUtensile>(
  'InfoAggiuntiveTipoUtensile',
  InfoAggiuntiveTipoUtensileSchema as any
) as mongoose.Model<IInfoAggiuntiveTipoUtensile>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveTipoUtensile;

export { InfoAggiuntiveTipoUtensileSchema };

export type TInfoAggiuntiveTipoUtensileModel = Omit<typeof InfoAggiuntiveTipoUtensile, 'traslateAliases'> & {
  translateAliases(raw: Partial<IInfoAggiuntiveTipoUtensile>): any
};

export type TInfoAggiuntiveTipoUtensileDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveTipoUtensile>
& IInfoAggiuntiveTipoUtensile;

export { IInfoAggiuntiveTipoUtensile };