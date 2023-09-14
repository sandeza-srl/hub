import * as mongoose from 'mongoose';

import TimbratureSchema from './Timbrature.Schema';
import type { ITimbrature } from './Timbrature.Types';


/* --------
* Model Definition
* -------- */
const Timbrature = mongoose.model<ITimbrature>(
  'Timbrature',
  TimbratureSchema as any
) as mongoose.Model<ITimbrature>;

/* --------
* Module Exports
* -------- */
export default Timbrature;

export { TimbratureSchema };

export type TTimbratureModel = Omit<typeof Timbrature, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITimbrature>): any
};

export type TTimbratureDocument = 
& mongoose.Document<any, {}, ITimbrature>
& ITimbrature;

export { ITimbrature };