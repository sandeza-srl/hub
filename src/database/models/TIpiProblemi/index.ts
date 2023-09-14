import * as mongoose from 'mongoose';

import TIpiProblemiSchema from './TIpiProblemi.Schema';
import type { ITIpiProblemi } from './TIpiProblemi.Types';


/* --------
* Model Definition
* -------- */
const TIpiProblemi = mongoose.model<ITIpiProblemi>(
  'TIpiProblemi',
  TIpiProblemiSchema as any
) as mongoose.Model<ITIpiProblemi>;

/* --------
* Module Exports
* -------- */
export default TIpiProblemi;

export { TIpiProblemiSchema };

export type TTIpiProblemiModel = Omit<typeof TIpiProblemi, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITIpiProblemi>): any
};

export type TTIpiProblemiDocument = 
& mongoose.Document<any, {}, ITIpiProblemi>
& ITIpiProblemi;

export { ITIpiProblemi };