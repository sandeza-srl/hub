import * as mongoose from 'mongoose';

import TipiInfoSchedeValutazioneSchema from './TipiInfoSchedeValutazione.Schema';
import type { ITipiInfoSchedeValutazione } from './TipiInfoSchedeValutazione.Types';


/* --------
* Model Definition
* -------- */
const TipiInfoSchedeValutazione = mongoose.model<ITipiInfoSchedeValutazione>(
  'TipiInfoSchedeValutazione',
  TipiInfoSchedeValutazioneSchema as any
) as mongoose.Model<ITipiInfoSchedeValutazione>;

/* --------
* Module Exports
* -------- */
export default TipiInfoSchedeValutazione;

export { TipiInfoSchedeValutazioneSchema };

export type TTipiInfoSchedeValutazioneModel = Omit<typeof TipiInfoSchedeValutazione, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiInfoSchedeValutazione>): any
};

export type TTipiInfoSchedeValutazioneDocument = 
& mongoose.Document<any, {}, ITipiInfoSchedeValutazione>
& ITipiInfoSchedeValutazione;

export { ITipiInfoSchedeValutazione };