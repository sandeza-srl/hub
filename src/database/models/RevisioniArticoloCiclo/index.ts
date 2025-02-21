import * as mongoose from 'mongoose';

import RevisioniArticoloCicloSchema from './RevisioniArticoloCiclo.Schema';
import type { IRevisioniArticoloCiclo } from './RevisioniArticoloCiclo.Types';


/* --------
* Model Definition
* -------- */
const RevisioniArticoloCiclo = mongoose.model<IRevisioniArticoloCiclo>(
'RevisioniArticoloCiclo',
RevisioniArticoloCicloSchema as any
) as mongoose.Model<IRevisioniArticoloCiclo>;

/* --------
* Module Exports
* -------- */
export default RevisioniArticoloCiclo;

export { RevisioniArticoloCicloSchema };

export type TRevisioniArticoloCicloModel = Omit<typeof RevisioniArticoloCiclo, 'traslateAliases'> & {
translateAliases(raw: Partial<IRevisioniArticoloCiclo>): any
};

export type TRevisioniArticoloCicloDocument = 
& mongoose.Document<any, {}, IRevisioniArticoloCiclo>
& IRevisioniArticoloCiclo;

export { IRevisioniArticoloCiclo };