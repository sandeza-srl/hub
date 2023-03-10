import * as mongoose from 'mongoose';

import ScaglioniCicliSchema from './ScaglioniCicli.Schema';
import type { IScaglioniCicli } from './ScaglioniCicli.Types';


/* --------
* Model Definition
* -------- */
const ScaglioniCicli = mongoose.model<IScaglioniCicli>(
  'ScaglioniCicli',
  ScaglioniCicliSchema as any
) as mongoose.Model<IScaglioniCicli>;

/* --------
* Module Exports
* -------- */
export default ScaglioniCicli;

export { ScaglioniCicliSchema };

export type TScaglioniCicliModel = typeof ScaglioniCicli;

export type TScaglioniCicliDocument = 
& mongoose.Document<any, {}, IScaglioniCicli>
& IScaglioniCicli;

export { IScaglioniCicli };