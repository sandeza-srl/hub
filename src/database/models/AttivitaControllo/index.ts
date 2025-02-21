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

export type TAttivitaControlloModel = Omit<typeof AttivitaControllo, 'traslateAliases'> & {
translateAliases(raw: Partial<IAttivitaControllo>): any
};

export type TAttivitaControlloDocument = 
& mongoose.Document<any, {}, IAttivitaControllo>
& IAttivitaControllo;

export { IAttivitaControllo };