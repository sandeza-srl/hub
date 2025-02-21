import * as mongoose from 'mongoose';

import ConversioniQtVociSchema from './ConversioniQtVoci.Schema';
import type { IConversioniQtVoci } from './ConversioniQtVoci.Types';


/* --------
* Model Definition
* -------- */
const ConversioniQtVoci = mongoose.model<IConversioniQtVoci>(
'ConversioniQtVoci',
ConversioniQtVociSchema as any
) as mongoose.Model<IConversioniQtVoci>;

/* --------
* Module Exports
* -------- */
export default ConversioniQtVoci;

export { ConversioniQtVociSchema };

export type TConversioniQtVociModel = Omit<typeof ConversioniQtVoci, 'traslateAliases'> & {
translateAliases(raw: Partial<IConversioniQtVoci>): any
};

export type TConversioniQtVociDocument = 
& mongoose.Document<any, {}, IConversioniQtVoci>
& IConversioniQtVoci;

export { IConversioniQtVoci };