import * as mongoose from 'mongoose';

import VociSistemiEsterniSchema from './VociSistemiEsterni.Schema';
import type { IVociSistemiEsterni } from './VociSistemiEsterni.Types';


/* --------
* Model Definition
* -------- */
const VociSistemiEsterni = mongoose.model<IVociSistemiEsterni>(
  'VociSistemiEsterni',
  VociSistemiEsterniSchema as any
) as mongoose.Model<IVociSistemiEsterni>;

/* --------
* Module Exports
* -------- */
export default VociSistemiEsterni;

export { VociSistemiEsterniSchema };

export type TVociSistemiEsterniModel = Omit<typeof VociSistemiEsterni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IVociSistemiEsterni>): any
};

export type TVociSistemiEsterniDocument = 
& mongoose.Document<any, {}, IVociSistemiEsterni>
& IVociSistemiEsterni;

export { IVociSistemiEsterni };