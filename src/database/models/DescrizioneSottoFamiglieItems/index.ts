import * as mongoose from 'mongoose';

import DescrizioneSottoFamiglieItemsSchema from './DescrizioneSottoFamiglieItems.Schema';
import type { IDescrizioneSottoFamiglieItems } from './DescrizioneSottoFamiglieItems.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneSottoFamiglieItems = mongoose.model<IDescrizioneSottoFamiglieItems>(
'DescrizioneSottoFamiglieItems',
DescrizioneSottoFamiglieItemsSchema as any
) as mongoose.Model<IDescrizioneSottoFamiglieItems>;

/* --------
* Module Exports
* -------- */
export default DescrizioneSottoFamiglieItems;

export { DescrizioneSottoFamiglieItemsSchema };

export type TDescrizioneSottoFamiglieItemsModel = Omit<typeof DescrizioneSottoFamiglieItems, 'traslateAliases'> & {
translateAliases(raw: Partial<IDescrizioneSottoFamiglieItems>): any
};

export type TDescrizioneSottoFamiglieItemsDocument = 
& mongoose.Document<any, {}, IDescrizioneSottoFamiglieItems>
& IDescrizioneSottoFamiglieItems;

export { IDescrizioneSottoFamiglieItems };