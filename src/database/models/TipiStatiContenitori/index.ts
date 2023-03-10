import * as mongoose from 'mongoose';

import TipiStatiContenitoriSchema from './TipiStatiContenitori.Schema';
import type { ITipiStatiContenitori } from './TipiStatiContenitori.Types';


/* --------
* Model Definition
* -------- */
const TipiStatiContenitori = mongoose.model<ITipiStatiContenitori>(
  'TipiStatiContenitori',
  TipiStatiContenitoriSchema as any
) as mongoose.Model<ITipiStatiContenitori>;

/* --------
* Module Exports
* -------- */
export default TipiStatiContenitori;

export { TipiStatiContenitoriSchema };

export type TTipiStatiContenitoriModel = typeof TipiStatiContenitori;

export type TTipiStatiContenitoriDocument = 
& mongoose.Document<any, {}, ITipiStatiContenitori>
& ITipiStatiContenitori;

export { ITipiStatiContenitori };