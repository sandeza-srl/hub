import * as mongoose from 'mongoose';

import PulsantiOrigineSchema from './PulsantiOrigine.Schema';
import type { IPulsantiOrigine } from './PulsantiOrigine.Types';


/* --------
* Model Definition
* -------- */
const PulsantiOrigine = mongoose.model<IPulsantiOrigine>(
'PulsantiOrigine',
PulsantiOrigineSchema as any
) as mongoose.Model<IPulsantiOrigine>;

/* --------
* Module Exports
* -------- */
export default PulsantiOrigine;

export { PulsantiOrigineSchema };

export type TPulsantiOrigineModel = Omit<typeof PulsantiOrigine, 'traslateAliases'> & {
translateAliases(raw: Partial<IPulsantiOrigine>): any
};

export type TPulsantiOrigineDocument = 
& mongoose.Document<any, {}, IPulsantiOrigine>
& IPulsantiOrigine;

export { IPulsantiOrigine };