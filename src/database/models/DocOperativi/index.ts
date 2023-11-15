import * as mongoose from 'mongoose';

import DocOperativiSchema from './DocOperativi.Schema';
import type { IDocOperativi } from './DocOperativi.Types';


/* --------
* Model Definition
* -------- */
const DocOperativi = mongoose.model<IDocOperativi>(
  'DocOperativi',
  DocOperativiSchema as any
) as mongoose.Model<IDocOperativi>;

/* --------
* Module Exports
* -------- */
export default DocOperativi;

export { DocOperativiSchema };

export type TDocOperativiModel = Omit<typeof DocOperativi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IDocOperativi>): any
};

export type TDocOperativiDocument = 
& mongoose.Document<any, {}, IDocOperativi>
& IDocOperativi;

export { IDocOperativi };