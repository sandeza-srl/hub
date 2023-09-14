import * as mongoose from 'mongoose';

import AttivitaStandardSchema from './AttivitaStandard.Schema';
import type { IAttivitaStandard } from './AttivitaStandard.Types';


/* --------
* Model Definition
* -------- */
const AttivitaStandard = mongoose.model<IAttivitaStandard>(
  'AttivitaStandard',
  AttivitaStandardSchema as any
) as mongoose.Model<IAttivitaStandard>;

/* --------
* Module Exports
* -------- */
export default AttivitaStandard;

export { AttivitaStandardSchema };

export type TAttivitaStandardModel = Omit<typeof AttivitaStandard, 'traslateAliases'> & {
  translateAliases(raw: Partial<IAttivitaStandard>): any
};

export type TAttivitaStandardDocument = 
& mongoose.Document<any, {}, IAttivitaStandard>
& IAttivitaStandard;

export { IAttivitaStandard };