import * as mongoose from 'mongoose';

import SoggettiComunicazioniSchema from './SoggettiComunicazioni.Schema';
import type { ISoggettiComunicazioni } from './SoggettiComunicazioni.Types';


/* --------
* Model Definition
* -------- */
const SoggettiComunicazioni = mongoose.model<ISoggettiComunicazioni>(
  'SoggettiComunicazioni',
  SoggettiComunicazioniSchema as any
) as mongoose.Model<ISoggettiComunicazioni>;

/* --------
* Module Exports
* -------- */
export default SoggettiComunicazioni;

export { SoggettiComunicazioniSchema };

export type TSoggettiComunicazioniModel = Omit<typeof SoggettiComunicazioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<ISoggettiComunicazioni>): any
};

export type TSoggettiComunicazioniDocument = 
& mongoose.Document<any, {}, ISoggettiComunicazioni>
& ISoggettiComunicazioni;

export { ISoggettiComunicazioni };