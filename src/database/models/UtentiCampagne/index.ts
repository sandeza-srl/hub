import * as mongoose from 'mongoose';

import UtentiCampagneSchema from './UtentiCampagne.Schema';
import type { IUtentiCampagne } from './UtentiCampagne.Types';


/* --------
* Model Definition
* -------- */
const UtentiCampagne = mongoose.model<IUtentiCampagne>(
'UtentiCampagne',
UtentiCampagneSchema as any
) as mongoose.Model<IUtentiCampagne>;

/* --------
* Module Exports
* -------- */
export default UtentiCampagne;

export { UtentiCampagneSchema };

export type TUtentiCampagneModel = Omit<typeof UtentiCampagne, 'traslateAliases'> & {
translateAliases(raw: Partial<IUtentiCampagne>): any
};

export type TUtentiCampagneDocument = 
& mongoose.Document<any, {}, IUtentiCampagne>
& IUtentiCampagne;

export { IUtentiCampagne };