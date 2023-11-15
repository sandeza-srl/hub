import * as mongoose from 'mongoose';

import LuoghiApertureSchema from './LuoghiAperture.Schema';
import type { ILuoghiAperture } from './LuoghiAperture.Types';


/* --------
* Model Definition
* -------- */
const LuoghiAperture = mongoose.model<ILuoghiAperture>(
  'LuoghiAperture',
  LuoghiApertureSchema as any
) as mongoose.Model<ILuoghiAperture>;

/* --------
* Module Exports
* -------- */
export default LuoghiAperture;

export { LuoghiApertureSchema };

export type TLuoghiApertureModel = Omit<typeof LuoghiAperture, 'traslateAliases'> & {
  translateAliases(raw: Partial<ILuoghiAperture>): any
};

export type TLuoghiApertureDocument = 
& mongoose.Document<any, {}, ILuoghiAperture>
& ILuoghiAperture;

export { ILuoghiAperture };