import * as mongoose from 'mongoose';

import SistemiEsterniSchema from './SistemiEsterni.Schema';
import type { ISistemiEsterni } from './SistemiEsterni.Types';


/* --------
* Model Definition
* -------- */
const SistemiEsterni = mongoose.model<ISistemiEsterni>(
'SistemiEsterni',
SistemiEsterniSchema as any
) as mongoose.Model<ISistemiEsterni>;

/* --------
* Module Exports
* -------- */
export default SistemiEsterni;

export { SistemiEsterniSchema };

export type TSistemiEsterniModel = Omit<typeof SistemiEsterni, 'traslateAliases'> & {
translateAliases(raw: Partial<ISistemiEsterni>): any
};

export type TSistemiEsterniDocument = 
& mongoose.Document<any, {}, ISistemiEsterni>
& ISistemiEsterni;

export { ISistemiEsterni };