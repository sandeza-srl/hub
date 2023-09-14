import * as mongoose from 'mongoose';

import TipiUtensiliPerOpzioneProdSchema from './TipiUtensiliPerOpzioneProd.Schema';
import type { ITipiUtensiliPerOpzioneProd } from './TipiUtensiliPerOpzioneProd.Types';


/* --------
* Model Definition
* -------- */
const TipiUtensiliPerOpzioneProd = mongoose.model<ITipiUtensiliPerOpzioneProd>(
  'TipiUtensiliPerOpzioneProd',
  TipiUtensiliPerOpzioneProdSchema as any
) as mongoose.Model<ITipiUtensiliPerOpzioneProd>;

/* --------
* Module Exports
* -------- */
export default TipiUtensiliPerOpzioneProd;

export { TipiUtensiliPerOpzioneProdSchema };

export type TTipiUtensiliPerOpzioneProdModel = Omit<typeof TipiUtensiliPerOpzioneProd, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiUtensiliPerOpzioneProd>): any
};

export type TTipiUtensiliPerOpzioneProdDocument = 
& mongoose.Document<any, {}, ITipiUtensiliPerOpzioneProd>
& ITipiUtensiliPerOpzioneProd;

export { ITipiUtensiliPerOpzioneProd };