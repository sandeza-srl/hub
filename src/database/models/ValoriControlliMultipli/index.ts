import * as mongoose from 'mongoose';

import ValoriControlliMultipliSchema from './ValoriControlliMultipli.Schema';
import type { IValoriControlliMultipli } from './ValoriControlliMultipli.Types';


/* --------
* Model Definition
* -------- */
const ValoriControlliMultipli = mongoose.model<IValoriControlliMultipli>(
  'ValoriControlliMultipli',
  ValoriControlliMultipliSchema as any
) as mongoose.Model<IValoriControlliMultipli>;

/* --------
* Module Exports
* -------- */
export default ValoriControlliMultipli;

export { ValoriControlliMultipliSchema };

export type TValoriControlliMultipliModel = Omit<typeof ValoriControlliMultipli, 'traslateAliases'> & {
  translateAliases(raw: Partial<IValoriControlliMultipli>): any
};

export type TValoriControlliMultipliDocument = 
& mongoose.Document<any, {}, IValoriControlliMultipli>
& IValoriControlliMultipli;

export { IValoriControlliMultipli };