import * as mongoose from 'mongoose';

import OriginiTipiDocOperativiSchema from './OriginiTipiDocOperativi.Schema';
import type { IOriginiTipiDocOperativi } from './OriginiTipiDocOperativi.Types';


/* --------
* Model Definition
* -------- */
const OriginiTipiDocOperativi = mongoose.model<IOriginiTipiDocOperativi>(
'OriginiTipiDocOperativi',
OriginiTipiDocOperativiSchema as any
) as mongoose.Model<IOriginiTipiDocOperativi>;

/* --------
* Module Exports
* -------- */
export default OriginiTipiDocOperativi;

export { OriginiTipiDocOperativiSchema };

export type TOriginiTipiDocOperativiModel = Omit<typeof OriginiTipiDocOperativi, 'traslateAliases'> & {
translateAliases(raw: Partial<IOriginiTipiDocOperativi>): any
};

export type TOriginiTipiDocOperativiDocument = 
& mongoose.Document<any, {}, IOriginiTipiDocOperativi>
& IOriginiTipiDocOperativi;

export { IOriginiTipiDocOperativi };