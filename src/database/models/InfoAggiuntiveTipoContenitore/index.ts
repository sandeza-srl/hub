import * as mongoose from 'mongoose';

import InfoAggiuntiveTipoContenitoreSchema from './InfoAggiuntiveTipoContenitore.Schema';
import type { IInfoAggiuntiveTipoContenitore } from './InfoAggiuntiveTipoContenitore.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveTipoContenitore = mongoose.model<IInfoAggiuntiveTipoContenitore>(
'InfoAggiuntiveTipoContenitore',
InfoAggiuntiveTipoContenitoreSchema as any
) as mongoose.Model<IInfoAggiuntiveTipoContenitore>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveTipoContenitore;

export { InfoAggiuntiveTipoContenitoreSchema };

export type TInfoAggiuntiveTipoContenitoreModel = Omit<typeof InfoAggiuntiveTipoContenitore, 'traslateAliases'> & {
translateAliases(raw: Partial<IInfoAggiuntiveTipoContenitore>): any
};

export type TInfoAggiuntiveTipoContenitoreDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveTipoContenitore>
& IInfoAggiuntiveTipoContenitore;

export { IInfoAggiuntiveTipoContenitore };