import * as mongoose from 'mongoose';

import ChecklistTipoAttivitaControlloSchema from './ChecklistTipoAttivitaControllo.Schema';
import type { IChecklistTipoAttivitaControllo } from './ChecklistTipoAttivitaControllo.Types';


/* --------
* Model Definition
* -------- */
const ChecklistTipoAttivitaControllo = mongoose.model<IChecklistTipoAttivitaControllo>(
  'ChecklistTipoAttivitaControllo',
  ChecklistTipoAttivitaControlloSchema as any
) as mongoose.Model<IChecklistTipoAttivitaControllo>;

/* --------
* Module Exports
* -------- */
export default ChecklistTipoAttivitaControllo;

export { ChecklistTipoAttivitaControlloSchema };

export type TChecklistTipoAttivitaControlloModel = Omit<typeof ChecklistTipoAttivitaControllo, 'traslateAliases'> & {
  translateAliases(raw: Partial<IChecklistTipoAttivitaControllo>): any
};

export type TChecklistTipoAttivitaControlloDocument = 
& mongoose.Document<any, {}, IChecklistTipoAttivitaControllo>
& IChecklistTipoAttivitaControllo;

export { IChecklistTipoAttivitaControllo };