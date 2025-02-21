import * as mongoose from 'mongoose';

import InfoAggiuntiveTipoStrumentoSchema from './InfoAggiuntiveTipoStrumento.Schema';
import type { IInfoAggiuntiveTipoStrumento } from './InfoAggiuntiveTipoStrumento.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveTipoStrumento = mongoose.model<IInfoAggiuntiveTipoStrumento>(
'InfoAggiuntiveTipoStrumento',
InfoAggiuntiveTipoStrumentoSchema as any
) as mongoose.Model<IInfoAggiuntiveTipoStrumento>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveTipoStrumento;

export { InfoAggiuntiveTipoStrumentoSchema };

export type TInfoAggiuntiveTipoStrumentoModel = Omit<typeof InfoAggiuntiveTipoStrumento, 'traslateAliases'> & {
translateAliases(raw: Partial<IInfoAggiuntiveTipoStrumento>): any
};

export type TInfoAggiuntiveTipoStrumentoDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveTipoStrumento>
& IInfoAggiuntiveTipoStrumento;

export { IInfoAggiuntiveTipoStrumento };