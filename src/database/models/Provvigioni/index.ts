import * as mongoose from 'mongoose';

import ProvvigioniSchema from './Provvigioni.Schema';
import type { IProvvigioni } from './Provvigioni.Types';


/* --------
* Model Definition
* -------- */
const Provvigioni = mongoose.model<IProvvigioni>(
  'Provvigioni',
  ProvvigioniSchema as any
) as mongoose.Model<IProvvigioni>;

/* --------
* Module Exports
* -------- */
export default Provvigioni;

export { ProvvigioniSchema };

export type TProvvigioniModel = typeof Provvigioni;

export type TProvvigioniDocument = 
& mongoose.Document<any, {}, IProvvigioni>
& IProvvigioni;

export { IProvvigioni };