import * as mongoose from 'mongoose';

import CostBreakdownScaglioneSchema from './CostBreakdownScaglione.Schema';
import type { ICostBreakdownScaglione } from './CostBreakdownScaglione.Types';


/* --------
* Model Definition
* -------- */
const CostBreakdownScaglione = mongoose.model<ICostBreakdownScaglione>(
  'CostBreakdownScaglione',
  CostBreakdownScaglioneSchema as any
) as mongoose.Model<ICostBreakdownScaglione>;

/* --------
* Module Exports
* -------- */
export default CostBreakdownScaglione;

export { CostBreakdownScaglioneSchema };

export type TCostBreakdownScaglioneModel = typeof CostBreakdownScaglione;

export type TCostBreakdownScaglioneDocument = 
& mongoose.Document<any, {}, ICostBreakdownScaglione>
& ICostBreakdownScaglione;

export { ICostBreakdownScaglione };