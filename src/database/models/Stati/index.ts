import * as mongoose from 'mongoose';

import StatiSchema from './Stati.Schema';
import type { IStati } from './Stati.Types';


/* --------
* Model Definition
* -------- */
const Stati = mongoose.model<IStati>(
'Stati',
StatiSchema as any
) as mongoose.Model<IStati>;

/* --------
* Module Exports
* -------- */
export default Stati;

export { StatiSchema };

export type TStatiModel = Omit<typeof Stati, 'traslateAliases'> & {
translateAliases(raw: Partial<IStati>): any
};

export type TStatiDocument = 
& mongoose.Document<any, {}, IStati>
& IStati;

export { IStati };