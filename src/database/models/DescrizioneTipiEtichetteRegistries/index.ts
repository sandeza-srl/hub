import * as mongoose from 'mongoose';

import DescrizioneTipiEtichetteRegistriesSchema from './DescrizioneTipiEtichetteRegistries.Schema';
import type { IDescrizioneTipiEtichetteRegistries } from './DescrizioneTipiEtichetteRegistries.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneTipiEtichetteRegistries = mongoose.model<IDescrizioneTipiEtichetteRegistries>(
  'DescrizioneTipiEtichetteRegistries',
  DescrizioneTipiEtichetteRegistriesSchema as any
) as mongoose.Model<IDescrizioneTipiEtichetteRegistries>;

/* --------
* Module Exports
* -------- */
export default DescrizioneTipiEtichetteRegistries;

export { DescrizioneTipiEtichetteRegistriesSchema };

export type TDescrizioneTipiEtichetteRegistriesModel = Omit<typeof DescrizioneTipiEtichetteRegistries, 'traslateAliases'> & {
  translateAliases(raw: Partial<IDescrizioneTipiEtichetteRegistries>): any
};

export type TDescrizioneTipiEtichetteRegistriesDocument = 
& mongoose.Document<any, {}, IDescrizioneTipiEtichetteRegistries>
& IDescrizioneTipiEtichetteRegistries;

export { IDescrizioneTipiEtichetteRegistries };