import * as mongoose from 'mongoose';

import InfoAggiuntiveUtensileSchema from './InfoAggiuntiveUtensile.Schema';
import type { IInfoAggiuntiveUtensile } from './InfoAggiuntiveUtensile.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveUtensile = mongoose.model<IInfoAggiuntiveUtensile>(
  'InfoAggiuntiveUtensile',
  InfoAggiuntiveUtensileSchema as any
) as mongoose.Model<IInfoAggiuntiveUtensile>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveUtensile;

export { InfoAggiuntiveUtensileSchema };

export type TInfoAggiuntiveUtensileModel = Omit<typeof InfoAggiuntiveUtensile, 'traslateAliases'> & {
  translateAliases(raw: Partial<IInfoAggiuntiveUtensile>): any
};

export type TInfoAggiuntiveUtensileDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveUtensile>
& IInfoAggiuntiveUtensile;

export { IInfoAggiuntiveUtensile };