import * as mongoose from 'mongoose';

import ValoriTipiEtichetteRegistriesSchema from './ValoriTipiEtichetteRegistries.Schema';
import type { IValoriTipiEtichetteRegistries } from './ValoriTipiEtichetteRegistries.Types';


/* --------
* Model Definition
* -------- */
const ValoriTipiEtichetteRegistries = mongoose.model<IValoriTipiEtichetteRegistries>(
  'ValoriTipiEtichetteRegistries',
  ValoriTipiEtichetteRegistriesSchema as any
) as mongoose.Model<IValoriTipiEtichetteRegistries>;

/* --------
* Module Exports
* -------- */
export default ValoriTipiEtichetteRegistries;

export { ValoriTipiEtichetteRegistriesSchema };

export type TValoriTipiEtichetteRegistriesModel = Omit<typeof ValoriTipiEtichetteRegistries, 'traslateAliases'> & {
  translateAliases(raw: Partial<IValoriTipiEtichetteRegistries>): any
};

export type TValoriTipiEtichetteRegistriesDocument = 
& mongoose.Document<any, {}, IValoriTipiEtichetteRegistries>
& IValoriTipiEtichetteRegistries;

export { IValoriTipiEtichetteRegistries };