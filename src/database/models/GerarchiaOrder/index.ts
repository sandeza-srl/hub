import * as mongoose from 'mongoose';

import GerarchiaOrderSchema from './GerarchiaOrder.Schema';
import type { IGerarchiaOrder } from './GerarchiaOrder.Types';


/* --------
* Model Definition
* -------- */
const GerarchiaOrder = mongoose.model<IGerarchiaOrder>(
  'GerarchiaOrder',
  GerarchiaOrderSchema as any
) as mongoose.Model<IGerarchiaOrder>;

/* --------
* Module Exports
* -------- */
export default GerarchiaOrder;

export { GerarchiaOrderSchema };

export type TGerarchiaOrderModel = typeof GerarchiaOrder;

export type TGerarchiaOrderDocument = 
& mongoose.Document<any, {}, IGerarchiaOrder>
& IGerarchiaOrder;

export { IGerarchiaOrder };