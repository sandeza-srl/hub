import * as mongoose from 'mongoose';

import CodificheClientiItemsSchema from './CodificheClientiItems.Schema';
import type { ICodificheClientiItems } from './CodificheClientiItems.Types';


/* --------
* Model Definition
* -------- */
const CodificheClientiItems = mongoose.model<ICodificheClientiItems>(
'CodificheClientiItems',
CodificheClientiItemsSchema as any
) as mongoose.Model<ICodificheClientiItems>;

/* --------
* Module Exports
* -------- */
export default CodificheClientiItems;

export { CodificheClientiItemsSchema };

export type TCodificheClientiItemsModel = Omit<typeof CodificheClientiItems, 'traslateAliases'> & {
translateAliases(raw: Partial<ICodificheClientiItems>): any
};

export type TCodificheClientiItemsDocument = 
& mongoose.Document<any, {}, ICodificheClientiItems>
& ICodificheClientiItems;

export { ICodificheClientiItems };