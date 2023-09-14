import * as mongoose from 'mongoose';

import TipologieAttivitaSchema from './TipologieAttivita.Schema';
import type { ITipologieAttivita } from './TipologieAttivita.Types';


/* --------
* Model Definition
* -------- */
const TipologieAttivita = mongoose.model<ITipologieAttivita>(
  'TipologieAttivita',
  TipologieAttivitaSchema as any
) as mongoose.Model<ITipologieAttivita>;

/* --------
* Module Exports
* -------- */
export default TipologieAttivita;

export { TipologieAttivitaSchema };

export type TTipologieAttivitaModel = Omit<typeof TipologieAttivita, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipologieAttivita>): any
};

export type TTipologieAttivitaDocument = 
& mongoose.Document<any, {}, ITipologieAttivita>
& ITipologieAttivita;

export { ITipologieAttivita };