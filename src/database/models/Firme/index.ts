import * as mongoose from 'mongoose';

import FirmeSchema from './Firme.Schema';
import type { IFirme } from './Firme.Types';


/* --------
* Model Definition
* -------- */
const Firme = mongoose.model<IFirme>(
'Firme',
FirmeSchema as any
) as mongoose.Model<IFirme>;

/* --------
* Module Exports
* -------- */
export default Firme;

export { FirmeSchema };

export type TFirmeModel = Omit<typeof Firme, 'traslateAliases'> & {
translateAliases(raw: Partial<IFirme>): any
};

export type TFirmeDocument = 
& mongoose.Document<any, {}, IFirme>
& IFirme;

export { IFirme };