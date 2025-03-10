import * as mongoose from 'mongoose';

import ChecklistSchedaAttivitaControlloSchema from './ChecklistSchedaAttivitaControllo.Schema';
import type { IChecklistSchedaAttivitaControllo } from './ChecklistSchedaAttivitaControllo.Types';


/* --------
* Model Definition
* -------- */
const ChecklistSchedaAttivitaControllo = mongoose.model<IChecklistSchedaAttivitaControllo>(
'ChecklistSchedaAttivitaControllo',
ChecklistSchedaAttivitaControlloSchema as any
) as mongoose.Model<IChecklistSchedaAttivitaControllo>;

/* --------
* Module Exports
* -------- */
export default ChecklistSchedaAttivitaControllo;

export { ChecklistSchedaAttivitaControlloSchema };

export type TChecklistSchedaAttivitaControlloModel = Omit<typeof ChecklistSchedaAttivitaControllo, 'traslateAliases'> & {
translateAliases(raw: Partial<IChecklistSchedaAttivitaControllo>): any
};

export type TChecklistSchedaAttivitaControlloDocument = 
& mongoose.Document<any, {}, IChecklistSchedaAttivitaControllo>
& IChecklistSchedaAttivitaControllo;

export { IChecklistSchedaAttivitaControllo };