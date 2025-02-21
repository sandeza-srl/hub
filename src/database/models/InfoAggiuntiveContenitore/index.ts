import * as mongoose from 'mongoose';

import InfoAggiuntiveContenitoreSchema from './InfoAggiuntiveContenitore.Schema';
import type { IInfoAggiuntiveContenitore } from './InfoAggiuntiveContenitore.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveContenitore = mongoose.model<IInfoAggiuntiveContenitore>(
'InfoAggiuntiveContenitore',
InfoAggiuntiveContenitoreSchema as any
) as mongoose.Model<IInfoAggiuntiveContenitore>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveContenitore;

export { InfoAggiuntiveContenitoreSchema };

export type TInfoAggiuntiveContenitoreModel = Omit<typeof InfoAggiuntiveContenitore, 'traslateAliases'> & {
translateAliases(raw: Partial<IInfoAggiuntiveContenitore>): any
};

export type TInfoAggiuntiveContenitoreDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveContenitore>
& IInfoAggiuntiveContenitore;

export { IInfoAggiuntiveContenitore };