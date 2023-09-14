import * as mongoose from 'mongoose';

import DocOperativiExtraSchema from './DocOperativiExtra.Schema';
import type { IDocOperativiExtra } from './DocOperativiExtra.Types';


/* --------
* Model Definition
* -------- */
const DocOperativiExtra = mongoose.model<IDocOperativiExtra>(
  'DocOperativiExtra',
  DocOperativiExtraSchema as any
) as mongoose.Model<IDocOperativiExtra>;

/* --------
* Module Exports
* -------- */
export default DocOperativiExtra;

export { DocOperativiExtraSchema };

export type TDocOperativiExtraModel = Omit<typeof DocOperativiExtra, 'traslateAliases'> & {
  translateAliases(raw: Partial<IDocOperativiExtra>): any
};

export type TDocOperativiExtraDocument = 
& mongoose.Document<any, {}, IDocOperativiExtra>
& IDocOperativiExtra;

export { IDocOperativiExtra };