import * as mongoose from 'mongoose';

import TipiElementiCostoGeneraliSchema from './TipiElementiCostoGenerali.Schema';
import type { ITipiElementiCostoGenerali } from './TipiElementiCostoGenerali.Types';


/* --------
* Model Definition
* -------- */
const TipiElementiCostoGenerali = mongoose.model<ITipiElementiCostoGenerali>(
'TipiElementiCostoGenerali',
TipiElementiCostoGeneraliSchema as any
) as mongoose.Model<ITipiElementiCostoGenerali>;

/* --------
* Module Exports
* -------- */
export default TipiElementiCostoGenerali;

export { TipiElementiCostoGeneraliSchema };

export type TTipiElementiCostoGeneraliModel = Omit<typeof TipiElementiCostoGenerali, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiElementiCostoGenerali>): any
};

export type TTipiElementiCostoGeneraliDocument = 
& mongoose.Document<any, {}, ITipiElementiCostoGenerali>
& ITipiElementiCostoGenerali;

export { ITipiElementiCostoGenerali };