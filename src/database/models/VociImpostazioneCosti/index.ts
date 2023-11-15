import * as mongoose from 'mongoose';

import VociImpostazioneCostiSchema from './VociImpostazioneCosti.Schema';
import type { IVociImpostazioneCosti } from './VociImpostazioneCosti.Types';


/* --------
* Model Definition
* -------- */
const VociImpostazioneCosti = mongoose.model<IVociImpostazioneCosti>(
  'VociImpostazioneCosti',
  VociImpostazioneCostiSchema as any
) as mongoose.Model<IVociImpostazioneCosti>;

/* --------
* Module Exports
* -------- */
export default VociImpostazioneCosti;

export { VociImpostazioneCostiSchema };

export type TVociImpostazioneCostiModel = Omit<typeof VociImpostazioneCosti, 'traslateAliases'> & {
  translateAliases(raw: Partial<IVociImpostazioneCosti>): any
};

export type TVociImpostazioneCostiDocument = 
& mongoose.Document<any, {}, IVociImpostazioneCosti>
& IVociImpostazioneCosti;

export { IVociImpostazioneCosti };