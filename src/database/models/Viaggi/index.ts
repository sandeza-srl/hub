import * as mongoose from 'mongoose';

import ViaggiSchema from './Viaggi.Schema';
import type { IViaggi } from './Viaggi.Types';


/* --------
* Model Definition
* -------- */
const Viaggi = mongoose.model<IViaggi>(
  'Viaggi',
  ViaggiSchema as any
) as mongoose.Model<IViaggi>;

/* --------
* Module Exports
* -------- */
export default Viaggi;

export { ViaggiSchema };

export type TViaggiModel = Omit<typeof Viaggi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IViaggi>): any
};

export type TViaggiDocument = 
& mongoose.Document<any, {}, IViaggi>
& IViaggi;

export { IViaggi };