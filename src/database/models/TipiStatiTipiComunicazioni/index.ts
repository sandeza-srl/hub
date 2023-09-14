import * as mongoose from 'mongoose';

import TipiStatiTipiComunicazioniSchema from './TipiStatiTipiComunicazioni.Schema';
import type { ITipiStatiTipiComunicazioni } from './TipiStatiTipiComunicazioni.Types';


/* --------
* Model Definition
* -------- */
const TipiStatiTipiComunicazioni = mongoose.model<ITipiStatiTipiComunicazioni>(
  'TipiStatiTipiComunicazioni',
  TipiStatiTipiComunicazioniSchema as any
) as mongoose.Model<ITipiStatiTipiComunicazioni>;

/* --------
* Module Exports
* -------- */
export default TipiStatiTipiComunicazioni;

export { TipiStatiTipiComunicazioniSchema };

export type TTipiStatiTipiComunicazioniModel = Omit<typeof TipiStatiTipiComunicazioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiStatiTipiComunicazioni>): any
};

export type TTipiStatiTipiComunicazioniDocument = 
& mongoose.Document<any, {}, ITipiStatiTipiComunicazioni>
& ITipiStatiTipiComunicazioni;

export { ITipiStatiTipiComunicazioni };