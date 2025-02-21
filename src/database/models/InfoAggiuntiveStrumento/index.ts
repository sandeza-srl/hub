import * as mongoose from 'mongoose';

import InfoAggiuntiveStrumentoSchema from './InfoAggiuntiveStrumento.Schema';
import type { IInfoAggiuntiveStrumento } from './InfoAggiuntiveStrumento.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveStrumento = mongoose.model<IInfoAggiuntiveStrumento>(
'InfoAggiuntiveStrumento',
InfoAggiuntiveStrumentoSchema as any
) as mongoose.Model<IInfoAggiuntiveStrumento>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveStrumento;

export { InfoAggiuntiveStrumentoSchema };

export type TInfoAggiuntiveStrumentoModel = Omit<typeof InfoAggiuntiveStrumento, 'traslateAliases'> & {
translateAliases(raw: Partial<IInfoAggiuntiveStrumento>): any
};

export type TInfoAggiuntiveStrumentoDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveStrumento>
& IInfoAggiuntiveStrumento;

export { IInfoAggiuntiveStrumento };