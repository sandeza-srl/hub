import * as mongoose from 'mongoose';

import CausaliTimbratureSchema from './CausaliTimbrature.Schema';
import type { ICausaliTimbrature } from './CausaliTimbrature.Types';


/* --------
* Model Definition
* -------- */
const CausaliTimbrature = mongoose.model<ICausaliTimbrature>(
  'CausaliTimbrature',
  CausaliTimbratureSchema as any
) as mongoose.Model<ICausaliTimbrature>;

/* --------
* Module Exports
* -------- */
export default CausaliTimbrature;

export { CausaliTimbratureSchema };

export type TCausaliTimbratureModel = typeof CausaliTimbrature;

export type TCausaliTimbratureDocument = 
& mongoose.Document<any, {}, ICausaliTimbrature>
& ICausaliTimbrature;

export { ICausaliTimbrature };