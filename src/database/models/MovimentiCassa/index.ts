import * as mongoose from 'mongoose';

import MovimentiCassaSchema from './MovimentiCassa.Schema';
import type { IMovimentiCassa } from './MovimentiCassa.Types';


/* --------
* Model Definition
* -------- */
const MovimentiCassa = mongoose.model<IMovimentiCassa>(
'MovimentiCassa',
MovimentiCassaSchema as any
) as mongoose.Model<IMovimentiCassa>;

/* --------
* Module Exports
* -------- */
export default MovimentiCassa;

export { MovimentiCassaSchema };

export type TMovimentiCassaModel = Omit<typeof MovimentiCassa, 'traslateAliases'> & {
translateAliases(raw: Partial<IMovimentiCassa>): any
};

export type TMovimentiCassaDocument = 
& mongoose.Document<any, {}, IMovimentiCassa>
& IMovimentiCassa;

export { IMovimentiCassa };