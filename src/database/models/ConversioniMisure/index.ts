import * as mongoose from 'mongoose';

import ConversioniMisureSchema from './ConversioniMisure.Schema';
import type { IConversioniMisure } from './ConversioniMisure.Types';


/* --------
* Model Definition
* -------- */
const ConversioniMisure = mongoose.model<IConversioniMisure>(
'ConversioniMisure',
ConversioniMisureSchema as any
) as mongoose.Model<IConversioniMisure>;

/* --------
* Module Exports
* -------- */
export default ConversioniMisure;

export { ConversioniMisureSchema };

export type TConversioniMisureModel = Omit<typeof ConversioniMisure, 'traslateAliases'> & {
translateAliases(raw: Partial<IConversioniMisure>): any
};

export type TConversioniMisureDocument = 
& mongoose.Document<any, {}, IConversioniMisure>
& IConversioniMisure;

export { IConversioniMisure };