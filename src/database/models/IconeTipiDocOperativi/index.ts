import * as mongoose from 'mongoose';

import IconeTipiDocOperativiSchema from './IconeTipiDocOperativi.Schema';
import type { IIconeTipiDocOperativi } from './IconeTipiDocOperativi.Types';


/* --------
* Model Definition
* -------- */
const IconeTipiDocOperativi = mongoose.model<IIconeTipiDocOperativi>(
'IconeTipiDocOperativi',
IconeTipiDocOperativiSchema as any
) as mongoose.Model<IIconeTipiDocOperativi>;

/* --------
* Module Exports
* -------- */
export default IconeTipiDocOperativi;

export { IconeTipiDocOperativiSchema };

export type TIconeTipiDocOperativiModel = Omit<typeof IconeTipiDocOperativi, 'traslateAliases'> & {
translateAliases(raw: Partial<IIconeTipiDocOperativi>): any
};

export type TIconeTipiDocOperativiDocument = 
& mongoose.Document<any, {}, IIconeTipiDocOperativi>
& IIconeTipiDocOperativi;

export { IIconeTipiDocOperativi };