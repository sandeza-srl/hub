import * as mongoose from 'mongoose';

import RicaviSpeseMeseSchema from './RicaviSpeseMese.Schema';
import type { IRicaviSpeseMese } from './RicaviSpeseMese.Types';


/* --------
* Model Definition
* -------- */
const RicaviSpeseMese = mongoose.model<IRicaviSpeseMese>(
'RicaviSpeseMese',
RicaviSpeseMeseSchema as any
) as mongoose.Model<IRicaviSpeseMese>;

/* --------
* Module Exports
* -------- */
export default RicaviSpeseMese;

export { RicaviSpeseMeseSchema };

export type TRicaviSpeseMeseModel = Omit<typeof RicaviSpeseMese, 'traslateAliases'> & {
translateAliases(raw: Partial<IRicaviSpeseMese>): any
};

export type TRicaviSpeseMeseDocument = 
& mongoose.Document<any, {}, IRicaviSpeseMese>
& IRicaviSpeseMese;

export { IRicaviSpeseMese };