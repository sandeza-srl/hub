import * as mongoose from 'mongoose';

import CampagneSchema from './Campagne.Schema';
import type { ICampagne } from './Campagne.Types';


/* --------
* Model Definition
* -------- */
const Campagne = mongoose.model<ICampagne>(
'Campagne',
CampagneSchema as any
) as mongoose.Model<ICampagne>;

/* --------
* Module Exports
* -------- */
export default Campagne;

export { CampagneSchema };

export type TCampagneModel = Omit<typeof Campagne, 'traslateAliases'> & {
translateAliases(raw: Partial<ICampagne>): any
};

export type TCampagneDocument = 
& mongoose.Document<any, {}, ICampagne>
& ICampagne;

export { ICampagne };