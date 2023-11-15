import * as mongoose from 'mongoose';

import ProgrammiMacchinaOpzioneProdSchema from './ProgrammiMacchinaOpzioneProd.Schema';
import type { IProgrammiMacchinaOpzioneProd } from './ProgrammiMacchinaOpzioneProd.Types';


/* --------
* Model Definition
* -------- */
const ProgrammiMacchinaOpzioneProd = mongoose.model<IProgrammiMacchinaOpzioneProd>(
  'ProgrammiMacchinaOpzioneProd',
  ProgrammiMacchinaOpzioneProdSchema as any
) as mongoose.Model<IProgrammiMacchinaOpzioneProd>;

/* --------
* Module Exports
* -------- */
export default ProgrammiMacchinaOpzioneProd;

export { ProgrammiMacchinaOpzioneProdSchema };

export type TProgrammiMacchinaOpzioneProdModel = Omit<typeof ProgrammiMacchinaOpzioneProd, 'traslateAliases'> & {
  translateAliases(raw: Partial<IProgrammiMacchinaOpzioneProd>): any
};

export type TProgrammiMacchinaOpzioneProdDocument = 
& mongoose.Document<any, {}, IProgrammiMacchinaOpzioneProd>
& IProgrammiMacchinaOpzioneProd;

export { IProgrammiMacchinaOpzioneProd };