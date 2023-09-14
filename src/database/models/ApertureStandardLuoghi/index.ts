import * as mongoose from 'mongoose';

import ApertureStandardLuoghiSchema from './ApertureStandardLuoghi.Schema';
import type { IApertureStandardLuoghi } from './ApertureStandardLuoghi.Types';


/* --------
* Model Definition
* -------- */
const ApertureStandardLuoghi = mongoose.model<IApertureStandardLuoghi>(
  'ApertureStandardLuoghi',
  ApertureStandardLuoghiSchema as any
) as mongoose.Model<IApertureStandardLuoghi>;

/* --------
* Module Exports
* -------- */
export default ApertureStandardLuoghi;

export { ApertureStandardLuoghiSchema };

export type TApertureStandardLuoghiModel = Omit<typeof ApertureStandardLuoghi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IApertureStandardLuoghi>): any
};

export type TApertureStandardLuoghiDocument = 
& mongoose.Document<any, {}, IApertureStandardLuoghi>
& IApertureStandardLuoghi;

export { IApertureStandardLuoghi };