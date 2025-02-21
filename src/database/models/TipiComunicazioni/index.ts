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

export type TTipiComunicazioniModel = Omit<typeof TipiComunicazioni, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiComunicazioni>): any
};

export type TTipiComunicazioniDocument = 
& mongoose.Document<any, {}, ITipiComunicazioni>
& ITipiComunicazioni;

export { ITipiComunicazioni };