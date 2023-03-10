import * as mongoose from 'mongoose';

import DatiRipartitoriSchema from './DatiRipartitori.Schema';
import type { IDatiRipartitori } from './DatiRipartitori.Types';


/* --------
* Model Definition
* -------- */
const DatiRipartitori = mongoose.model<IDatiRipartitori>(
  'DatiRipartitori',
  DatiRipartitoriSchema as any
) as mongoose.Model<IDatiRipartitori>;

/* --------
* Module Exports
* -------- */
export default DatiRipartitori;

export { DatiRipartitoriSchema };

export type TDatiRipartitoriModel = typeof DatiRipartitori;

export type TDatiRipartitoriDocument = 
& mongoose.Document<any, {}, IDatiRipartitori>
& IDatiRipartitori;

export { IDatiRipartitori };