import * as mongoose from 'mongoose';

import ValoriChecklistTipoAttivitaControlloSchema from './ValoriChecklistTipoAttivitaControllo.Schema';
import type { IValoriChecklistTipoAttivitaControllo } from './ValoriChecklistTipoAttivitaControllo.Types';


/* --------
* Model Definition
* -------- */
const ValoriChecklistTipoAttivitaControllo = mongoose.model<IValoriChecklistTipoAttivitaControllo>(
  'ValoriChecklistTipoAttivitaControllo',
  ValoriChecklistTipoAttivitaControlloSchema as any
) as mongoose.Model<IValoriChecklistTipoAttivitaControllo>;

/* --------
* Module Exports
* -------- */
export default ValoriChecklistTipoAttivitaControllo;

export { ValoriChecklistTipoAttivitaControlloSchema };

export type TValoriChecklistTipoAttivitaControlloModel = typeof ValoriChecklistTipoAttivitaControllo;

export type TValoriChecklistTipoAttivitaControlloDocument = 
& mongoose.Document<any, {}, IValoriChecklistTipoAttivitaControllo>
& IValoriChecklistTipoAttivitaControllo;

export { IValoriChecklistTipoAttivitaControllo };