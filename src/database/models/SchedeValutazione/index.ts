import * as mongoose from 'mongoose';

import SchedeValutazioneSchema from './SchedeValutazione.Schema';
import type { ISchedeValutazione } from './SchedeValutazione.Types';


/* --------
* Model Definition
* -------- */
const SchedeValutazione = mongoose.model<ISchedeValutazione>(
  'SchedeValutazione',
  SchedeValutazioneSchema as any
) as mongoose.Model<ISchedeValutazione>;

/* --------
* Module Exports
* -------- */
export default SchedeValutazione;

export { SchedeValutazioneSchema };

export type TSchedeValutazioneModel = Omit<typeof SchedeValutazione, 'traslateAliases'> & {
  translateAliases(raw: Partial<ISchedeValutazione>): any
};

export type TSchedeValutazioneDocument = 
& mongoose.Document<any, {}, ISchedeValutazione>
& ISchedeValutazione;

export { ISchedeValutazione };