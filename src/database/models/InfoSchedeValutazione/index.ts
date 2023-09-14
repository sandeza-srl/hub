import * as mongoose from 'mongoose';

import InfoSchedeValutazioneSchema from './InfoSchedeValutazione.Schema';
import type { IInfoSchedeValutazione } from './InfoSchedeValutazione.Types';


/* --------
* Model Definition
* -------- */
const InfoSchedeValutazione = mongoose.model<IInfoSchedeValutazione>(
  'InfoSchedeValutazione',
  InfoSchedeValutazioneSchema as any
) as mongoose.Model<IInfoSchedeValutazione>;

/* --------
* Module Exports
* -------- */
export default InfoSchedeValutazione;

export { InfoSchedeValutazioneSchema };

export type TInfoSchedeValutazioneModel = Omit<typeof InfoSchedeValutazione, 'traslateAliases'> & {
  translateAliases(raw: Partial<IInfoSchedeValutazione>): any
};

export type TInfoSchedeValutazioneDocument = 
& mongoose.Document<any, {}, IInfoSchedeValutazione>
& IInfoSchedeValutazione;

export { IInfoSchedeValutazione };