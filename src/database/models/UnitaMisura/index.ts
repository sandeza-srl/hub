import * as mongoose from 'mongoose';

import UnitaMisuraSchema from './UnitaMisura.Schema';
import type { IUnitaMisura } from './UnitaMisura.Types';


/* --------
* Model Definition
* -------- */
const UnitaMisura = mongoose.model<IUnitaMisura>(
'UnitaMisura',
UnitaMisuraSchema as any
) as mongoose.Model<IUnitaMisura>;

/* --------
* Module Exports
* -------- */
export default UnitaMisura;

export { UnitaMisuraSchema };

export type TUnitaMisuraModel = Omit<typeof UnitaMisura, 'traslateAliases'> & {
translateAliases(raw: Partial<IUnitaMisura>): any
};

export type TUnitaMisuraDocument = 
& mongoose.Document<any, {}, IUnitaMisura>
& IUnitaMisura;

export { IUnitaMisura };