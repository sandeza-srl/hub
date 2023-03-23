import * as mongoose from 'mongoose';

import TipiComunicazioniSchema from './TipiComunicazioni.Schema';
import type { ITipiComunicazioni } from './TipiComunicazioni.Types';


/* --------
* Model Definition
* -------- */
const TipiComunicazioni = mongoose.model<ITipiComunicazioni>(
  'TipiComunicazioni',
  TipiComunicazioniSchema as any
) as mongoose.Model<ITipiComunicazioni>;

/* --------
* Module Exports
* -------- */
export default TipiComunicazioni;

export { TipiComunicazioniSchema };

export type TTipiComunicazioniModel = typeof TipiComunicazioni;

export type TTipiComunicazioniDocument = 
& mongoose.Document<any, {}, ITipiComunicazioni>
& ITipiComunicazioni;

export { ITipiComunicazioni };