import * as mongoose from 'mongoose';

import InfoAggiuntiveAnagraficaSchema from './InfoAggiuntiveAnagrafica.Schema';
import type { IInfoAggiuntiveAnagrafica } from './InfoAggiuntiveAnagrafica.Types';


/* --------
* Model Definition
* -------- */
const InfoAggiuntiveAnagrafica = mongoose.model<IInfoAggiuntiveAnagrafica>(
  'InfoAggiuntiveAnagrafica',
  InfoAggiuntiveAnagraficaSchema as any
) as mongoose.Model<IInfoAggiuntiveAnagrafica>;

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveAnagrafica;

export { InfoAggiuntiveAnagraficaSchema };

export type TInfoAggiuntiveAnagraficaModel = typeof InfoAggiuntiveAnagrafica;

export type TInfoAggiuntiveAnagraficaDocument = 
& mongoose.Document<any, {}, IInfoAggiuntiveAnagrafica>
& IInfoAggiuntiveAnagrafica;

export { IInfoAggiuntiveAnagrafica };