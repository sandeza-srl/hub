import * as mongoose from 'mongoose';

import DescrizioneTipiComunicazioniSchema from './DescrizioneTipiComunicazioni.Schema';
import type { IDescrizioneTipiComunicazioni } from './DescrizioneTipiComunicazioni.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneTipiComunicazioni = mongoose.model<IDescrizioneTipiComunicazioni>(
'DescrizioneTipiComunicazioni',
DescrizioneTipiComunicazioniSchema as any
) as mongoose.Model<IDescrizioneTipiComunicazioni>;

/* --------
* Module Exports
* -------- */
export default DescrizioneTipiComunicazioni;

export { DescrizioneTipiComunicazioniSchema };

export type TDescrizioneTipiComunicazioniModel = Omit<typeof DescrizioneTipiComunicazioni, 'traslateAliases'> & {
translateAliases(raw: Partial<IDescrizioneTipiComunicazioni>): any
};

export type TDescrizioneTipiComunicazioniDocument = 
& mongoose.Document<any, {}, IDescrizioneTipiComunicazioni>
& IDescrizioneTipiComunicazioni;

export { IDescrizioneTipiComunicazioni };