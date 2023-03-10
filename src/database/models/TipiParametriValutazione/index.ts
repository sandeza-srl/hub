import * as mongoose from 'mongoose';

import TipiParametriValutazioneSchema from './TipiParametriValutazione.Schema';
import type { ITipiParametriValutazione } from './TipiParametriValutazione.Types';


/* --------
* Model Definition
* -------- */
const TipiParametriValutazione = mongoose.model<ITipiParametriValutazione>(
  'TipiParametriValutazione',
  TipiParametriValutazioneSchema as any
) as mongoose.Model<ITipiParametriValutazione>;

/* --------
* Module Exports
* -------- */
export default TipiParametriValutazione;

export { TipiParametriValutazioneSchema };

export type TTipiParametriValutazioneModel = typeof TipiParametriValutazione;

export type TTipiParametriValutazioneDocument = 
& mongoose.Document<any, {}, ITipiParametriValutazione>
& ITipiParametriValutazione;

export { ITipiParametriValutazione };