import * as mongoose from 'mongoose';

import TipiCampagneSchema from './TipiCampagne.Schema';
import type { ITipiCampagne } from './TipiCampagne.Types';


/* --------
* Model Definition
* -------- */
const TipiCampagne = mongoose.model<ITipiCampagne>(
  'TipiCampagne',
  TipiCampagneSchema as any
) as mongoose.Model<ITipiCampagne>;

/* --------
* Module Exports
* -------- */
export default TipiCampagne;

export { TipiCampagneSchema };

export type TTipiCampagneModel = Omit<typeof TipiCampagne, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiCampagne>): any
};

export type TTipiCampagneDocument = 
& mongoose.Document<any, {}, ITipiCampagne>
& ITipiCampagne;

export { ITipiCampagne };