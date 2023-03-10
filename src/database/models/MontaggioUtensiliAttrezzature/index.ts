import * as mongoose from 'mongoose';

import MontaggioUtensiliAttrezzatureSchema from './MontaggioUtensiliAttrezzature.Schema';
import type { IMontaggioUtensiliAttrezzature } from './MontaggioUtensiliAttrezzature.Types';


/* --------
* Model Definition
* -------- */
const MontaggioUtensiliAttrezzature = mongoose.model<IMontaggioUtensiliAttrezzature>(
  'MontaggioUtensiliAttrezzature',
  MontaggioUtensiliAttrezzatureSchema as any
) as mongoose.Model<IMontaggioUtensiliAttrezzature>;

/* --------
* Module Exports
* -------- */
export default MontaggioUtensiliAttrezzature;

export { MontaggioUtensiliAttrezzatureSchema };

export type TMontaggioUtensiliAttrezzatureModel = typeof MontaggioUtensiliAttrezzature;

export type TMontaggioUtensiliAttrezzatureDocument = 
& mongoose.Document<any, {}, IMontaggioUtensiliAttrezzature>
& IMontaggioUtensiliAttrezzature;

export { IMontaggioUtensiliAttrezzature };