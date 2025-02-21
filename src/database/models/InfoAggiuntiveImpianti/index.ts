import * as mongoose from 'mongoose';

import InfoAggiuntiveImpiantiSchema from './InfoAggiuntiveImpianti.Schema';
import type { IInfoAggiuntiveImpianti } from './InfoAggiuntiveImpianti.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveImpianti = mongoose.model<IInfoAggiuntiveImpianti>(
'InfoAggiuntiveImpianti',
InfoAggiuntiveImpiantiSchema as any
) as mongoose.Model<IInfoAggiuntiveImpianti>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveImpianti;

export { InfoAggiuntiveImpiantiSchema };

export type TInfoAggiuntiveImpiantiModel = Omit<typeof InfoAggiuntiveImpianti, 'traslateAliases'> & {
translateAliases(raw: Partial<IInfoAggiuntiveImpianti>): any
};

export type TInfoAggiuntiveImpiantiDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveImpianti>
& IInfoAggiuntiveImpianti;

export { IInfoAggiuntiveImpianti };