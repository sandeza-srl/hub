import * as mongoose from 'mongoose';

import DisattrezzaggiSchema from './Disattrezzaggi.Schema';
import type { IDisattrezzaggi } from './Disattrezzaggi.Types';


/* --------
* Model Definition
* -------- */
const Disattrezzaggi = mongoose.model<IDisattrezzaggi>(
  'Disattrezzaggi',
  DisattrezzaggiSchema as any
) as mongoose.Model<IDisattrezzaggi>;

/* --------
* Module Exports
* -------- */
export default Disattrezzaggi;

export { DisattrezzaggiSchema };

export type TDisattrezzaggiModel = typeof Disattrezzaggi;

export type TDisattrezzaggiDocument = 
& mongoose.Document<any, {}, IDisattrezzaggi>
& IDisattrezzaggi;

export { IDisattrezzaggi };