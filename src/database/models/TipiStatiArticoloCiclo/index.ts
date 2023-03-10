import * as mongoose from 'mongoose';

import TipiStatiArticoloCicloSchema from './TipiStatiArticoloCiclo.Schema';
import type { ITipiStatiArticoloCiclo } from './TipiStatiArticoloCiclo.Types';


/* --------
* Model Definition
* -------- */
const TipiStatiArticoloCiclo = mongoose.model<ITipiStatiArticoloCiclo>(
  'TipiStatiArticoloCiclo',
  TipiStatiArticoloCicloSchema as any
) as mongoose.Model<ITipiStatiArticoloCiclo>;

/* --------
* Module Exports
* -------- */
export default TipiStatiArticoloCiclo;

export { TipiStatiArticoloCicloSchema };

export type TTipiStatiArticoloCicloModel = typeof TipiStatiArticoloCiclo;

export type TTipiStatiArticoloCicloDocument = 
& mongoose.Document<any, {}, ITipiStatiArticoloCiclo>
& ITipiStatiArticoloCiclo;

export { ITipiStatiArticoloCiclo };