import * as mongoose from 'mongoose';

import InfoAggiuntiveDistintaImpiantoSchema from './InfoAggiuntiveDistintaImpianto.Schema';
import type { IInfoAggiuntiveDistintaImpianto } from './InfoAggiuntiveDistintaImpianto.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveDistintaImpianto = mongoose.model<IInfoAggiuntiveDistintaImpianto>(
'InfoAggiuntiveDistintaImpianto',
InfoAggiuntiveDistintaImpiantoSchema as any
) as mongoose.Model<IInfoAggiuntiveDistintaImpianto>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveDistintaImpianto;

export { InfoAggiuntiveDistintaImpiantoSchema };

export type TInfoAggiuntiveDistintaImpiantoModel = Omit<typeof InfoAggiuntiveDistintaImpianto, 'traslateAliases'> & {
translateAliases(raw: Partial<IInfoAggiuntiveDistintaImpianto>): any
};

export type TInfoAggiuntiveDistintaImpiantoDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveDistintaImpianto>
& IInfoAggiuntiveDistintaImpianto;

export { IInfoAggiuntiveDistintaImpianto };