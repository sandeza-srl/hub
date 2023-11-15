import * as mongoose from 'mongoose';

import AttrezzaggiSchema from './Attrezzaggi.Schema';
import type { IAttrezzaggi } from './Attrezzaggi.Types';


/* --------
* Model Definition
* -------- */
const Attrezzaggi = mongoose.model<IAttrezzaggi>(
  'Attrezzaggi',
  AttrezzaggiSchema as any
) as mongoose.Model<IAttrezzaggi>;

/* --------
* Module Exports
* -------- */
export default Attrezzaggi;

export { AttrezzaggiSchema };

export type TAttrezzaggiModel = Omit<typeof Attrezzaggi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IAttrezzaggi>): any
};

export type TAttrezzaggiDocument = 
& mongoose.Document<any, {}, IAttrezzaggi>
& IAttrezzaggi;

export { IAttrezzaggi };