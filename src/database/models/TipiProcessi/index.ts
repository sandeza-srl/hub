import * as mongoose from 'mongoose';

import TipiProcessiSchema from './TipiProcessi.Schema';
import type { ITipiProcessi } from './TipiProcessi.Types';


/* --------
* Model Definition
* -------- */
const TipiProcessi = mongoose.model<ITipiProcessi>(
'TipiProcessi',
TipiProcessiSchema as any
) as mongoose.Model<ITipiProcessi>;

/* --------
* Module Exports
* -------- */
export default TipiProcessi;

export { TipiProcessiSchema };

export type TTipiProcessiModel = Omit<typeof TipiProcessi, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiProcessi>): any
};

export type TTipiProcessiDocument = 
& mongoose.Document<any, {}, ITipiProcessi>
& ITipiProcessi;

export { ITipiProcessi };