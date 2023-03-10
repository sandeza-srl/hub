import * as mongoose from 'mongoose';

import DocContabiliSchema from './DocContabili.Schema';
import type { IDocContabili } from './DocContabili.Types';


/* --------
* Model Definition
* -------- */
const DocContabili = mongoose.model<IDocContabili>(
  'DocContabili',
  DocContabiliSchema as any
) as mongoose.Model<IDocContabili>;

/* --------
* Module Exports
* -------- */
export default DocContabili;

export { DocContabiliSchema };

export type TDocContabiliModel = typeof DocContabili;

export type TDocContabiliDocument = 
& mongoose.Document<any, {}, IDocContabili>
& IDocContabili;

export { IDocContabili };