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

export type TTipiStatiContenitoriModel = Omit<typeof TipiStatiContenitori, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiStatiContenitori>): any
};

export type TTipiStatiContenitoriDocument = 
& mongoose.Document<any, {}, ITipiStatiContenitori>
& ITipiStatiContenitori;

export { ITipiStatiContenitori };