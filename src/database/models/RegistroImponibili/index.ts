import * as mongoose from 'mongoose';

import RegistroImponibiliSchema from './RegistroImponibili.Schema';
import type { IRegistroImponibili } from './RegistroImponibili.Types';


/* --------
* Model Definition
* -------- */
const RegistroImponibili = mongoose.model<IRegistroImponibili>(
'RegistroImponibili',
RegistroImponibiliSchema as any
) as mongoose.Model<IRegistroImponibili>;

/* --------
* Module Exports
* -------- */
export default RegistroImponibili;

export { RegistroImponibiliSchema };

export type TRegistroImponibiliModel = Omit<typeof RegistroImponibili, 'traslateAliases'> & {
translateAliases(raw: Partial<IRegistroImponibili>): any
};

export type TRegistroImponibiliDocument = 
& mongoose.Document<any, {}, IRegistroImponibili>
& IRegistroImponibili;

export { IRegistroImponibili };