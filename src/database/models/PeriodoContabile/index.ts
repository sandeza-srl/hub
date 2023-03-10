import * as mongoose from 'mongoose';

import PeriodoContabileSchema from './PeriodoContabile.Schema';
import type { IPeriodoContabile } from './PeriodoContabile.Types';


/* --------
* Model Definition
* -------- */
const PeriodoContabile = mongoose.model<IPeriodoContabile>(
  'PeriodoContabile',
  PeriodoContabileSchema as any
) as mongoose.Model<IPeriodoContabile>;

/* --------
* Module Exports
* -------- */
export default PeriodoContabile;

export { PeriodoContabileSchema };

export type TPeriodoContabileModel = typeof PeriodoContabile;

export type TPeriodoContabileDocument = 
& mongoose.Document<any, {}, IPeriodoContabile>
& IPeriodoContabile;

export { IPeriodoContabile };