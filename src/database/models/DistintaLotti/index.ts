import * as mongoose from 'mongoose';

import DistintaLottiSchema from './DistintaLotti.Schema';
import type { IDistintaLotti } from './DistintaLotti.Types';


/* --------
* Model Definition
* -------- */
const DistintaLotti = mongoose.model<IDistintaLotti>(
'DistintaLotti',
DistintaLottiSchema as any
) as mongoose.Model<IDistintaLotti>;

/* --------
* Module Exports
* -------- */
export default DistintaLotti;

export { DistintaLottiSchema };

export type TDistintaLottiModel = Omit<typeof DistintaLotti, 'traslateAliases'> & {
translateAliases(raw: Partial<IDistintaLotti>): any
};

export type TDistintaLottiDocument = 
& mongoose.Document<any, {}, IDistintaLotti>
& IDistintaLotti;

export { IDistintaLotti };