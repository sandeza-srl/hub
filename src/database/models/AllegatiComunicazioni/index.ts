import * as mongoose from 'mongoose';

import AllegatiComunicazioniSchema from './AllegatiComunicazioni.Schema';
import type { IAllegatiComunicazioni } from './AllegatiComunicazioni.Types';


/* --------
* Model Definition
* -------- */
const AllegatiComunicazioni = mongoose.model<IAllegatiComunicazioni>(
'AllegatiComunicazioni',
AllegatiComunicazioniSchema as any
) as mongoose.Model<IAllegatiComunicazioni>;

/* --------
* Module Exports
* -------- */
export default AllegatiComunicazioni;

export { AllegatiComunicazioniSchema };

export type TAllegatiComunicazioniModel = Omit<typeof AllegatiComunicazioni, 'traslateAliases'> & {
translateAliases(raw: Partial<IAllegatiComunicazioni>): any
};

export type TAllegatiComunicazioniDocument = 
& mongoose.Document<any, {}, IAllegatiComunicazioni>
& IAllegatiComunicazioni;

export { IAllegatiComunicazioni };