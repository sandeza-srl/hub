import * as mongoose from 'mongoose';

import RevisioniCodificheClientiItemsSchema from './RevisioniCodificheClientiItems.Schema';
import type { IRevisioniCodificheClientiItems } from './RevisioniCodificheClientiItems.Types';


/* --------
* Model Definition
* -------- */
const RevisioniCodificheClientiItems = mongoose.model<IRevisioniCodificheClientiItems>(
  'RevisioniCodificheClientiItems',
  RevisioniCodificheClientiItemsSchema as any
) as mongoose.Model<IRevisioniCodificheClientiItems>;

/* --------
* Module Exports
* -------- */
export default RevisioniCodificheClientiItems;

export { RevisioniCodificheClientiItemsSchema };

export type TRevisioniCodificheClientiItemsModel = typeof RevisioniCodificheClientiItems;

export type TRevisioniCodificheClientiItemsDocument = 
& mongoose.Document<any, {}, IRevisioniCodificheClientiItems>
& IRevisioniCodificheClientiItems;

export { IRevisioniCodificheClientiItems };