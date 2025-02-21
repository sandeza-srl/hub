import * as mongoose from 'mongoose';

import FestivitaSchema from './Festivita.Schema';
import type { IFestivita } from './Festivita.Types';


/* --------
* Model Definition
* -------- */
const Festivita = mongoose.model<IFestivita>(
'Festivita',
FestivitaSchema as any
) as mongoose.Model<IFestivita>;

/* --------
* Module Exports
* -------- */
export default Festivita;

export { FestivitaSchema };

export type TFestivitaModel = Omit<typeof Festivita, 'traslateAliases'> & {
translateAliases(raw: Partial<IFestivita>): any
};

export type TFestivitaDocument = 
& mongoose.Document<any, {}, IFestivita>
& IFestivita;

export { IFestivita };