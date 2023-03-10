import * as mongoose from 'mongoose';

import SupportoCalendarioSchema from './SupportoCalendario.Schema';
import type { ISupportoCalendario } from './SupportoCalendario.Types';


/* --------
* Model Definition
* -------- */
const SupportoCalendario = mongoose.model<ISupportoCalendario>(
  'SupportoCalendario',
  SupportoCalendarioSchema as any
) as mongoose.Model<ISupportoCalendario>;

/* --------
* Module Exports
* -------- */
export default SupportoCalendario;

export { SupportoCalendarioSchema };

export type TSupportoCalendarioModel = typeof SupportoCalendario;

export type TSupportoCalendarioDocument = 
& mongoose.Document<any, {}, ISupportoCalendario>
& ISupportoCalendario;

export { ISupportoCalendario };