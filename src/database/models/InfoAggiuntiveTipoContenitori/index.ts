import * as mongoose from 'mongoose';

import InfoAggiuntiveTipoContenitoriSchema from './InfoAggiuntiveTipoContenitori.Schema';
import type { IInfoAggiuntiveTipoContenitori } from './InfoAggiuntiveTipoContenitori.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveTipoContenitori = mongoose.model<IInfoAggiuntiveTipoContenitori>(
'InfoAggiuntiveTipoContenitori',
InfoAggiuntiveTipoContenitoriSchema as any
) as mongoose.Model<IInfoAggiuntiveTipoContenitori>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveTipoContenitori;

export { InfoAggiuntiveTipoContenitoriSchema };

export type TInfoAggiuntiveTipoContenitoriModel = Omit<typeof InfoAggiuntiveTipoContenitori, 'traslateAliases'> & {
translateAliases(raw: Partial<IInfoAggiuntiveTipoContenitori>): any
};

export type TInfoAggiuntiveTipoContenitoriDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveTipoContenitori>
& IInfoAggiuntiveTipoContenitori;

export { IInfoAggiuntiveTipoContenitori };