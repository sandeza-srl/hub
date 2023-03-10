import * as mongoose from 'mongoose';

import GruppiLavoroSchema from './GruppiLavoro.Schema';
import type { IGruppiLavoro } from './GruppiLavoro.Types';


/* --------
* Model Definition
* -------- */
const GruppiLavoro = mongoose.model<IGruppiLavoro>(
  'GruppiLavoro',
  GruppiLavoroSchema as any
) as mongoose.Model<IGruppiLavoro>;

/* --------
* Module Exports
* -------- */
export default GruppiLavoro;

export { GruppiLavoroSchema };

export type TGruppiLavoroModel = typeof GruppiLavoro;

export type TGruppiLavoroDocument = 
& mongoose.Document<any, {}, IGruppiLavoro>
& IGruppiLavoro;

export { IGruppiLavoro };