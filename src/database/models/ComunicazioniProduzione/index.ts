import * as mongoose from 'mongoose';

import ComunicazioniProduzioneSchema from './ComunicazioniProduzione.Schema';
import type { IComunicazioniProduzione } from './ComunicazioniProduzione.Types';


/* --------
* Model Definition
* -------- */
const ComunicazioniProduzione = mongoose.model<IComunicazioniProduzione>(
  'ComunicazioniProduzione',
  ComunicazioniProduzioneSchema as any
) as mongoose.Model<IComunicazioniProduzione>;

/* --------
* Module Exports
* -------- */
export default ComunicazioniProduzione;

export { ComunicazioniProduzioneSchema };

export type TComunicazioniProduzioneModel = Omit<typeof ComunicazioniProduzione, 'traslateAliases'> & {
  translateAliases(raw: Partial<IComunicazioniProduzione>): any
};

export type TComunicazioniProduzioneDocument = 
& mongoose.Document<any, {}, IComunicazioniProduzione>
& IComunicazioniProduzione;

export { IComunicazioniProduzione };