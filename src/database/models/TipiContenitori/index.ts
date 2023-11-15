import * as mongoose from 'mongoose';

import TipiContenitoriSchema from './TipiContenitori.Schema';
import type { ITipiContenitori } from './TipiContenitori.Types';


/* --------
* Model Definition
* -------- */
const TipiContenitori = mongoose.model<ITipiContenitori>(
  'TipiContenitori',
  TipiContenitoriSchema as any
) as mongoose.Model<ITipiContenitori>;

/* --------
* Module Exports
* -------- */
export default TipiContenitori;

export { TipiContenitoriSchema };

export type TTipiContenitoriModel = Omit<typeof TipiContenitori, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiContenitori>): any
};

export type TTipiContenitoriDocument = 
& mongoose.Document<any, {}, ITipiContenitori>
& ITipiContenitori;

export { ITipiContenitori };