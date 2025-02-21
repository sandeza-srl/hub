import * as mongoose from 'mongoose';

import TipiCaveSchema from './TipiCave.Schema';
import type { ITipiCave } from './TipiCave.Types';


/* --------
* Model Definition
* -------- */
const TipiCave = mongoose.model<ITipiCave>(
'TipiCave',
TipiCaveSchema as any
) as mongoose.Model<ITipiCave>;

/* --------
* Module Exports
* -------- */
export default TipiCave;

export { TipiCaveSchema };

export type TTipiCaveModel = Omit<typeof TipiCave, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiCave>): any
};

export type TTipiCaveDocument = 
& mongoose.Document<any, {}, ITipiCave>
& ITipiCave;

export { ITipiCave };