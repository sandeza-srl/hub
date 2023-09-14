import * as mongoose from 'mongoose';

import LuoghiSchema from './Luoghi.Schema';
import type { ILuoghi } from './Luoghi.Types';


/* --------
* Model Definition
* -------- */
const Luoghi = mongoose.model<ILuoghi>(
  'Luoghi',
  LuoghiSchema as any
) as mongoose.Model<ILuoghi>;

/* --------
* Module Exports
* -------- */
export default Luoghi;

export { LuoghiSchema };

export type TLuoghiModel = Omit<typeof Luoghi, 'traslateAliases'> & {
  translateAliases(raw: Partial<ILuoghi>): any
};

export type TLuoghiDocument = 
& mongoose.Document<any, {}, ILuoghi>
& ILuoghi;

export { ILuoghi };