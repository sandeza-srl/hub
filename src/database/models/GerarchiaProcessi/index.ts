import * as mongoose from 'mongoose';

import GerarchiaProcessiSchema from './GerarchiaProcessi.Schema';
import type { IGerarchiaProcessi } from './GerarchiaProcessi.Types';


/* --------
* Model Definition
* -------- */
const GerarchiaProcessi = mongoose.model<IGerarchiaProcessi>(
'GerarchiaProcessi',
GerarchiaProcessiSchema as any
) as mongoose.Model<IGerarchiaProcessi>;

/* --------
* Module Exports
* -------- */
export default GerarchiaProcessi;

export { GerarchiaProcessiSchema };

export type TGerarchiaProcessiModel = Omit<typeof GerarchiaProcessi, 'traslateAliases'> & {
translateAliases(raw: Partial<IGerarchiaProcessi>): any
};

export type TGerarchiaProcessiDocument = 
& mongoose.Document<any, {}, IGerarchiaProcessi>
& IGerarchiaProcessi;

export { IGerarchiaProcessi };