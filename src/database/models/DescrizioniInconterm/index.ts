import * as mongoose from 'mongoose';

import DescrizioniIncontermSchema from './DescrizioniInconterm.Schema';
import type { IDescrizioniInconterm } from './DescrizioniInconterm.Types';


/* --------
* Model Definition
* -------- */
const DescrizioniInconterm = mongoose.model<IDescrizioniInconterm>(
  'DescrizioniInconterm',
  DescrizioniIncontermSchema as any
) as mongoose.Model<IDescrizioniInconterm>;

/* --------
* Module Exports
* -------- */
export default DescrizioniInconterm;

export { DescrizioniIncontermSchema };

export type TDescrizioniIncontermModel = typeof DescrizioniInconterm;

export type TDescrizioniIncontermDocument = 
& mongoose.Document<any, {}, IDescrizioniInconterm>
& IDescrizioniInconterm;

export { IDescrizioniInconterm };