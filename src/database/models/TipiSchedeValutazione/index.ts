import * as mongoose from 'mongoose';

import TipiSchedeValutazioneSchema from './TipiSchedeValutazione.Schema';
import type { ITipiSchedeValutazione } from './TipiSchedeValutazione.Types';


/* --------
* Model Definition
* -------- */
const TipiSchedeValutazione = mongoose.model<ITipiSchedeValutazione>(
'TipiSchedeValutazione',
TipiSchedeValutazioneSchema as any
) as mongoose.Model<ITipiSchedeValutazione>;

/* --------
* Module Exports
* -------- */
export default TipiSchedeValutazione;

export { TipiSchedeValutazioneSchema };

export type TTipiSchedeValutazioneModel = Omit<typeof TipiSchedeValutazione, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiSchedeValutazione>): any
};

export type TTipiSchedeValutazioneDocument = 
& mongoose.Document<any, {}, ITipiSchedeValutazione>
& ITipiSchedeValutazione;

export { ITipiSchedeValutazione };