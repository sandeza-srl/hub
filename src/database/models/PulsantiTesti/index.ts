import * as mongoose from 'mongoose';

import PulsantiTestiSchema from './PulsantiTesti.Schema';
import type { IPulsantiTesti } from './PulsantiTesti.Types';


/* --------
* Model Definition
* -------- */
const PulsantiTesti = mongoose.model<IPulsantiTesti>(
'PulsantiTesti',
PulsantiTestiSchema as any
) as mongoose.Model<IPulsantiTesti>;

/* --------
* Module Exports
* -------- */
export default PulsantiTesti;

export { PulsantiTestiSchema };

export type TPulsantiTestiModel = Omit<typeof PulsantiTesti, 'traslateAliases'> & {
translateAliases(raw: Partial<IPulsantiTesti>): any
};

export type TPulsantiTestiDocument = 
& mongoose.Document<any, {}, IPulsantiTesti>
& IPulsantiTesti;

export { IPulsantiTesti };