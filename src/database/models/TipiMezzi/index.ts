import * as mongoose from 'mongoose';

import TipiMezziSchema from './TipiMezzi.Schema';
import type { ITipiMezzi } from './TipiMezzi.Types';


/* --------
* Model Definition
* -------- */
const TipiMezzi = mongoose.model<ITipiMezzi>(
'TipiMezzi',
TipiMezziSchema as any
) as mongoose.Model<ITipiMezzi>;

/* --------
* Module Exports
* -------- */
export default TipiMezzi;

export { TipiMezziSchema };

export type TTipiMezziModel = Omit<typeof TipiMezzi, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiMezzi>): any
};

export type TTipiMezziDocument = 
& mongoose.Document<any, {}, ITipiMezzi>
& ITipiMezzi;

export { ITipiMezzi };