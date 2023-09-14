import * as mongoose from 'mongoose';

import CalTempSchema from './CalTemp.Schema';
import type { ICalTemp } from './CalTemp.Types';


/* --------
* Model Definition
* -------- */
const CalTemp = mongoose.model<ICalTemp>(
  'CalTemp',
  CalTempSchema as any
) as mongoose.Model<ICalTemp>;

/* --------
* Module Exports
* -------- */
export default CalTemp;

export { CalTempSchema };

export type TCalTempModel = Omit<typeof CalTemp, 'traslateAliases'> & {
  translateAliases(raw: Partial<ICalTemp>): any
};

export type TCalTempDocument = 
& mongoose.Document<any, {}, ICalTemp>
& ICalTemp;

export { ICalTemp };