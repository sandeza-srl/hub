import * as mongoose from 'mongoose';

import ComunicazioniSchema from './Comunicazioni.Schema';
import type { IComunicazioni } from './Comunicazioni.Types';


/* --------
* Model Definition
* -------- */
const Comunicazioni = mongoose.model<IComunicazioni>(
  'Comunicazioni',
  ComunicazioniSchema as any
) as mongoose.Model<IComunicazioni>;

/* --------
* Module Exports
* -------- */
export default Comunicazioni;

export { ComunicazioniSchema };

export type TComunicazioniModel = typeof Comunicazioni;

export type TComunicazioniDocument = 
& mongoose.Document<any, {}, IComunicazioni>
& IComunicazioni;

export { IComunicazioni };