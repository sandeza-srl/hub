import * as mongoose from 'mongoose';

import TipiComunicazioniProduzioneSchema from './TipiComunicazioniProduzione.Schema';
import type { ITipiComunicazioniProduzione } from './TipiComunicazioniProduzione.Types';


/* --------
* Model Definition
* -------- */
const TipiComunicazioniProduzione = mongoose.model<ITipiComunicazioniProduzione>(
'TipiComunicazioniProduzione',
TipiComunicazioniProduzioneSchema as any
) as mongoose.Model<ITipiComunicazioniProduzione>;

/* --------
* Module Exports
* -------- */
export default TipiComunicazioniProduzione;

export { TipiComunicazioniProduzioneSchema };

export type TTipiComunicazioniProduzioneModel = Omit<typeof TipiComunicazioniProduzione, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiComunicazioniProduzione>): any
};

export type TTipiComunicazioniProduzioneDocument = 
& mongoose.Document<any, {}, ITipiComunicazioniProduzione>
& ITipiComunicazioniProduzione;

export { ITipiComunicazioniProduzione };