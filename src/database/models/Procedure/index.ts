import * as mongoose from 'mongoose';

import ProcedureSchema from './Procedure.Schema';
import type { IProcedure } from './Procedure.Types';


/* --------
* Model Definition
* -------- */
const Procedure = mongoose.model<IProcedure>(
  'Procedure',
  ProcedureSchema as any
) as mongoose.Model<IProcedure>;

/* --------
* Module Exports
* -------- */
export default Procedure;

export { ProcedureSchema };

export type TProcedureModel = typeof Procedure;

export type TProcedureDocument = 
& mongoose.Document<any, {}, IProcedure>
& IProcedure;

export { IProcedure };