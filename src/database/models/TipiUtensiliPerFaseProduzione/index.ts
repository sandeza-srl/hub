import * as mongoose from 'mongoose';

import TipiUtensiliPerFaseProduzioneSchema from './TipiUtensiliPerFaseProduzione.Schema';
import type { ITipiUtensiliPerFaseProduzione } from './TipiUtensiliPerFaseProduzione.Types';


/* --------
* Model Definition
* -------- */
const TipiUtensiliPerFaseProduzione = mongoose.model<ITipiUtensiliPerFaseProduzione>(
  'TipiUtensiliPerFaseProduzione',
  TipiUtensiliPerFaseProduzioneSchema as any
) as mongoose.Model<ITipiUtensiliPerFaseProduzione>;

/* --------
* Module Exports
* -------- */
export default TipiUtensiliPerFaseProduzione;

export { TipiUtensiliPerFaseProduzioneSchema };

export type TTipiUtensiliPerFaseProduzioneModel = typeof TipiUtensiliPerFaseProduzione;

export type TTipiUtensiliPerFaseProduzioneDocument = 
& mongoose.Document<any, {}, ITipiUtensiliPerFaseProduzione>
& ITipiUtensiliPerFaseProduzione;

export { ITipiUtensiliPerFaseProduzione };