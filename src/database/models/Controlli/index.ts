import * as mongoose from 'mongoose';

import ControlliSchema from './Controlli.Schema';
import type { IControlli } from './Controlli.Types';


/* --------
* Model Definition
* -------- */
const Controlli = mongoose.model<IControlli>(
'Controlli',
ControlliSchema as any
) as mongoose.Model<IControlli>;

/* --------
* Module Exports
* -------- */
export default Controlli;

export { ControlliSchema };

export type TControlliModel = Omit<typeof Controlli, 'traslateAliases'> & {
translateAliases(raw: Partial<IControlli>): any
};

export type TControlliDocument = 
& mongoose.Document<any, {}, IControlli>
& IControlli;

export { IControlli };