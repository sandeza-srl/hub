import * as mongoose from 'mongoose';

import AttivitaSchema from './Attivita.Schema';
import type { IAttivita } from './Attivita.Types';


/* --------
* Model Definition
* -------- */
const Attivita = mongoose.model<IAttivita>(
  'Attivita',
  AttivitaSchema as any
) as mongoose.Model<IAttivita>;

/* --------
* Module Exports
* -------- */
export default Attivita;

export { AttivitaSchema };

export type TAttivitaModel = Omit<typeof Attivita, 'traslateAliases'> & {
  translateAliases(raw: Partial<IAttivita>): any
};

export type TAttivitaDocument = 
& mongoose.Document<any, {}, IAttivita>
& IAttivita;

export { IAttivita };