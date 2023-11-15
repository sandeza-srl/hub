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

export type TDescrizioniIncontermModel = Omit<typeof DescrizioniInconterm, 'traslateAliases'> & {
  translateAliases(raw: Partial<IDescrizioniInconterm>): any
};

export type TDescrizioniIncontermDocument = 
& mongoose.Document<any, {}, IDescrizioniInconterm>
& IDescrizioniInconterm;

export { IDescrizioniInconterm };