import * as mongoose from 'mongoose';

import RegistroImponibiliDocOperativiSchema from './RegistroImponibiliDocOperativi.Schema';
import type { IRegistroImponibiliDocOperativi } from './RegistroImponibiliDocOperativi.Types';


/* --------
* Model Definition
* -------- */
const RegistroImponibiliDocOperativi = mongoose.model<IRegistroImponibiliDocOperativi>(
'RegistroImponibiliDocOperativi',
RegistroImponibiliDocOperativiSchema as any
) as mongoose.Model<IRegistroImponibiliDocOperativi>;

/* --------
* Module Exports
* -------- */
export default RegistroImponibiliDocOperativi;

export { RegistroImponibiliDocOperativiSchema };

export type TRegistroImponibiliDocOperativiModel = Omit<typeof RegistroImponibiliDocOperativi, 'traslateAliases'> & {
translateAliases(raw: Partial<IRegistroImponibiliDocOperativi>): any
};

export type TRegistroImponibiliDocOperativiDocument = 
& mongoose.Document<any, {}, IRegistroImponibiliDocOperativi>
& IRegistroImponibiliDocOperativi;

export { IRegistroImponibiliDocOperativi };