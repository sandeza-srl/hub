import * as mongoose from 'mongoose';

import DistintaImpiantoSchema from './DistintaImpianto.Schema';
import type { IDistintaImpianto } from './DistintaImpianto.Types';


/* --------
* Model Definition
* -------- */
const DistintaImpianto = mongoose.model<IDistintaImpianto>(
  'DistintaImpianto',
  DistintaImpiantoSchema as any
) as mongoose.Model<IDistintaImpianto>;

/* --------
* Module Exports
* -------- */
export default DistintaImpianto;

export { DistintaImpiantoSchema };

export type TDistintaImpiantoModel = typeof DistintaImpianto;

export type TDistintaImpiantoDocument = 
& mongoose.Document<any, {}, IDistintaImpianto>
& IDistintaImpianto;

export { IDistintaImpianto };