import * as mongoose from 'mongoose';

import TipiResponsabiliSchema from './TipiResponsabili.Schema';
import type { ITipiResponsabili } from './TipiResponsabili.Types';


/* --------
* Model Definition
* -------- */
const TipiResponsabili = mongoose.model<ITipiResponsabili>(
'TipiResponsabili',
TipiResponsabiliSchema as any
) as mongoose.Model<ITipiResponsabili>;

/* --------
* Module Exports
* -------- */
export default TipiResponsabili;

export { TipiResponsabiliSchema };

export type TTipiResponsabiliModel = Omit<typeof TipiResponsabili, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiResponsabili>): any
};

export type TTipiResponsabiliDocument = 
& mongoose.Document<any, {}, ITipiResponsabili>
& ITipiResponsabili;

export { ITipiResponsabili };