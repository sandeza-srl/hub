import * as mongoose from 'mongoose';

import TipiTagSchema from './TipiTag.Schema';
import type { ITipiTag } from './TipiTag.Types';


/* --------
* Model Definition
* -------- */
const TipiTag = mongoose.model<ITipiTag>(
'TipiTag',
TipiTagSchema as any
) as mongoose.Model<ITipiTag>;

/* --------
* Module Exports
* -------- */
export default TipiTag;

export { TipiTagSchema };

export type TTipiTagModel = Omit<typeof TipiTag, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiTag>): any
};

export type TTipiTagDocument = 
& mongoose.Document<any, {}, ITipiTag>
& ITipiTag;

export { ITipiTag };