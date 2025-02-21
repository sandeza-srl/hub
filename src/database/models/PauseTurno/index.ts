import * as mongoose from 'mongoose';

import PauseTurnoSchema from './PauseTurno.Schema';
import type { IPauseTurno } from './PauseTurno.Types';


/* --------
* Model Definition
* -------- */
const PauseTurno = mongoose.model<IPauseTurno>(
'PauseTurno',
PauseTurnoSchema as any
) as mongoose.Model<IPauseTurno>;

/* --------
* Module Exports
* -------- */
export default PauseTurno;

export { PauseTurnoSchema };

export type TPauseTurnoModel = Omit<typeof PauseTurno, 'traslateAliases'> & {
translateAliases(raw: Partial<IPauseTurno>): any
};

export type TPauseTurnoDocument = 
& mongoose.Document<any, {}, IPauseTurno>
& IPauseTurno;

export { IPauseTurno };