import * as mongoose from 'mongoose';

import IncotermSchema from './Incoterm.Schema';
import type { IIncoterm } from './Incoterm.Types';


/* --------
* Model Definition
* -------- */
const Incoterm = mongoose.model<IIncoterm>(
  'Incoterm',
  IncotermSchema as any
) as mongoose.Model<IIncoterm>;

/* --------
* Module Exports
* -------- */
export default Incoterm;

export { IncotermSchema };

export type TIncotermModel = typeof Incoterm;

export type TIncotermDocument = 
& mongoose.Document<any, {}, IIncoterm>
& IIncoterm;

export { IIncoterm };