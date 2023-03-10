import * as mongoose from 'mongoose';

import AttivitaControlloSchema from './AttivitaControllo.Schema';
import type { IAttivitaControllo } from './AttivitaControllo.Types';


/* --------
* Model Definition
* -------- */
const AttivitaControllo = mongoose.model<IAttivitaControllo>(
  'AttivitaControllo',
  AttivitaControlloSchema as any
) as mongoose.Model<IAttivitaControllo>;

/* --------
* Module Exports
* -------- */
export default AttivitaControllo;

export { AttivitaControlloSchema };

export type TAttivitaControlloModel = typeof AttivitaControllo;

export type TAttivitaControlloDocument = 
& mongoose.Document<any, {}, IAttivitaControllo>
& IAttivitaControllo;

export { IAttivitaControllo };