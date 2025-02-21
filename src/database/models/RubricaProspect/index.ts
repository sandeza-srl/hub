import * as mongoose from 'mongoose';

import RubricaProspectSchema from './RubricaProspect.Schema';
import type { IRubricaProspect } from './RubricaProspect.Types';


/* --------
* Model Definition
* -------- */
const RubricaProspect = mongoose.model<IRubricaProspect>(
'RubricaProspect',
RubricaProspectSchema as any
) as mongoose.Model<IRubricaProspect>;

/* --------
* Module Exports
* -------- */
export default RubricaProspect;

export { RubricaProspectSchema };

export type TRubricaProspectModel = Omit<typeof RubricaProspect, 'traslateAliases'> & {
translateAliases(raw: Partial<IRubricaProspect>): any
};

export type TRubricaProspectDocument = 
& mongoose.Document<any, {}, IRubricaProspect>
& IRubricaProspect;

export { IRubricaProspect };