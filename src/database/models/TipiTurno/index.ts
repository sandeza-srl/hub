import * as mongoose from 'mongoose';

import TipiTurnoSchema from './TipiTurno.Schema';
import type { ITipiTurno } from './TipiTurno.Types';


/* --------
* Model Definition
* -------- */
const TipiTurno = mongoose.model<ITipiTurno>(
'TipiTurno',
TipiTurnoSchema as any
) as mongoose.Model<ITipiTurno>;

/* --------
* Module Exports
* -------- */
export default TipiTurno;

export { TipiTurnoSchema };

export type TTipiTurnoModel = Omit<typeof TipiTurno, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiTurno>): any
};

export type TTipiTurnoDocument = 
& mongoose.Document<any, {}, ITipiTurno>
& ITipiTurno;

export { ITipiTurno };