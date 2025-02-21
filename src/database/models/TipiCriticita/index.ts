import * as mongoose from 'mongoose';

import TipiCriticitaSchema from './TipiCriticita.Schema';
import type { ITipiCriticita } from './TipiCriticita.Types';


/* --------
* Model Definition
* -------- */
const TipiCriticita = mongoose.model<ITipiCriticita>(
'TipiCriticita',
TipiCriticitaSchema as any
) as mongoose.Model<ITipiCriticita>;

/* --------
* Module Exports
* -------- */
export default TipiCriticita;

export { TipiCriticitaSchema };

export type TTipiCriticitaModel = Omit<typeof TipiCriticita, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiCriticita>): any
};

export type TTipiCriticitaDocument = 
& mongoose.Document<any, {}, ITipiCriticita>
& ITipiCriticita;

export { ITipiCriticita };