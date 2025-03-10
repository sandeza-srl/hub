import * as mongoose from 'mongoose';

import SchedeAttivitaControlloSchema from './SchedeAttivitaControllo.Schema';
import type { ISchedeAttivitaControllo } from './SchedeAttivitaControllo.Types';


/* --------
* Model Definition
* -------- */
const SchedeAttivitaControllo = mongoose.model<ISchedeAttivitaControllo>(
'SchedeAttivitaControllo',
SchedeAttivitaControlloSchema as any
) as mongoose.Model<ISchedeAttivitaControllo>;

/* --------
* Module Exports
* -------- */
export default SchedeAttivitaControllo;

export { SchedeAttivitaControlloSchema };

export type TSchedeAttivitaControlloModel = Omit<typeof SchedeAttivitaControllo, 'traslateAliases'> & {
translateAliases(raw: Partial<ISchedeAttivitaControllo>): any
};

export type TSchedeAttivitaControlloDocument = 
& mongoose.Document<any, {}, ISchedeAttivitaControllo>
& ISchedeAttivitaControllo;

export { ISchedeAttivitaControllo };