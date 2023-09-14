import * as mongoose from 'mongoose';

import UtentePulsantiSchema from './UtentePulsanti.Schema';
import type { IUtentePulsanti } from './UtentePulsanti.Types';


/* --------
* Model Definition
* -------- */
const UtentePulsanti = mongoose.model<IUtentePulsanti>(
  'UtentePulsanti',
  UtentePulsantiSchema as any
) as mongoose.Model<IUtentePulsanti>;

/* --------
* Module Exports
* -------- */
export default UtentePulsanti;

export { UtentePulsantiSchema };

export type TUtentePulsantiModel = Omit<typeof UtentePulsanti, 'traslateAliases'> & {
  translateAliases(raw: Partial<IUtentePulsanti>): any
};

export type TUtentePulsantiDocument = 
& mongoose.Document<any, {}, IUtentePulsanti>
& IUtentePulsanti;

export { IUtentePulsanti };