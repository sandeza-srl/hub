import * as mongoose from 'mongoose';

import VociTipiElementiCostoGeneraliSchema from './VociTipiElementiCostoGenerali.Schema';
import type { IVociTipiElementiCostoGenerali } from './VociTipiElementiCostoGenerali.Types';


/* --------
* Model Definition
* -------- */
const VociTipiElementiCostoGenerali = mongoose.model<IVociTipiElementiCostoGenerali>(
  'VociTipiElementiCostoGenerali',
  VociTipiElementiCostoGeneraliSchema as any
) as mongoose.Model<IVociTipiElementiCostoGenerali>;

/* --------
* Module Exports
* -------- */
export default VociTipiElementiCostoGenerali;

export { VociTipiElementiCostoGeneraliSchema };

export type TVociTipiElementiCostoGeneraliModel = Omit<typeof VociTipiElementiCostoGenerali, 'traslateAliases'> & {
  translateAliases(raw: Partial<IVociTipiElementiCostoGenerali>): any
};

export type TVociTipiElementiCostoGeneraliDocument = 
& mongoose.Document<any, {}, IVociTipiElementiCostoGenerali>
& IVociTipiElementiCostoGenerali;

export { IVociTipiElementiCostoGenerali };