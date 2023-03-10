import * as mongoose from 'mongoose';

import OperatoriTipiRuoliSchema from './OperatoriTipiRuoli.Schema';
import type { IOperatoriTipiRuoli } from './OperatoriTipiRuoli.Types';


/* --------
* Model Definition
* -------- */
const OperatoriTipiRuoli = mongoose.model<IOperatoriTipiRuoli>(
  'OperatoriTipiRuoli',
  OperatoriTipiRuoliSchema as any
) as mongoose.Model<IOperatoriTipiRuoli>;

/* --------
* Module Exports
* -------- */
export default OperatoriTipiRuoli;

export { OperatoriTipiRuoliSchema };

export type TOperatoriTipiRuoliModel = typeof OperatoriTipiRuoli;

export type TOperatoriTipiRuoliDocument = 
& mongoose.Document<any, {}, IOperatoriTipiRuoli>
& IOperatoriTipiRuoli;

export { IOperatoriTipiRuoli };