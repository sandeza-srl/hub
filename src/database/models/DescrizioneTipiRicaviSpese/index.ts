import * as mongoose from 'mongoose';

import DescrizioneTipiRicaviSpeseSchema from './DescrizioneTipiRicaviSpese.Schema';
import type { IDescrizioneTipiRicaviSpese } from './DescrizioneTipiRicaviSpese.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneTipiRicaviSpese = mongoose.model<IDescrizioneTipiRicaviSpese>(
'DescrizioneTipiRicaviSpese',
DescrizioneTipiRicaviSpeseSchema as any
) as mongoose.Model<IDescrizioneTipiRicaviSpese>;

/* --------
* Module Exports
* -------- */
export default DescrizioneTipiRicaviSpese;

export { DescrizioneTipiRicaviSpeseSchema };

export type TDescrizioneTipiRicaviSpeseModel = Omit<typeof DescrizioneTipiRicaviSpese, 'traslateAliases'> & {
translateAliases(raw: Partial<IDescrizioneTipiRicaviSpese>): any
};

export type TDescrizioneTipiRicaviSpeseDocument = 
& mongoose.Document<any, {}, IDescrizioneTipiRicaviSpese>
& IDescrizioneTipiRicaviSpese;

export { IDescrizioneTipiRicaviSpese };