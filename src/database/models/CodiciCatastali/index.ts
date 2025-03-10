import * as mongoose from 'mongoose';

import CodiciCatastaliSchema from './CodiciCatastali.Schema';
import type { ICodiciCatastali } from './CodiciCatastali.Types';


/* --------
* Model Definition
* -------- */
const CodiciCatastali = mongoose.model<ICodiciCatastali>(
'CodiciCatastali',
CodiciCatastaliSchema as any
) as mongoose.Model<ICodiciCatastali>;

/* --------
* Module Exports
* -------- */
export default CodiciCatastali;

export { CodiciCatastaliSchema };

export type TCodiciCatastaliModel = Omit<typeof CodiciCatastali, 'traslateAliases'> & {
translateAliases(raw: Partial<ICodiciCatastali>): any
};

export type TCodiciCatastaliDocument = 
& mongoose.Document<any, {}, ICodiciCatastali>
& ICodiciCatastali;

export { ICodiciCatastali };