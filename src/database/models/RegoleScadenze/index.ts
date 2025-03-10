import * as mongoose from 'mongoose';

import RegoleScadenzeSchema from './RegoleScadenze.Schema';
import type { IRegoleScadenze } from './RegoleScadenze.Types';


/* --------
* Model Definition
* -------- */
const RegoleScadenze = mongoose.model<IRegoleScadenze>(
'RegoleScadenze',
RegoleScadenzeSchema as any
) as mongoose.Model<IRegoleScadenze>;

/* --------
* Module Exports
* -------- */
export default RegoleScadenze;

export { RegoleScadenzeSchema };

export type TRegoleScadenzeModel = Omit<typeof RegoleScadenze, 'traslateAliases'> & {
translateAliases(raw: Partial<IRegoleScadenze>): any
};

export type TRegoleScadenzeDocument = 
& mongoose.Document<any, {}, IRegoleScadenze>
& IRegoleScadenze;

export { IRegoleScadenze };