import * as mongoose from 'mongoose';

import TipiEtichetteRegistriesSchema from './TipiEtichetteRegistries.Schema';
import type { ITipiEtichetteRegistries } from './TipiEtichetteRegistries.Types';


/* --------
* Model Definition
* -------- */
const TipiEtichetteRegistries = mongoose.model<ITipiEtichetteRegistries>(
  'TipiEtichetteRegistries',
  TipiEtichetteRegistriesSchema as any
) as mongoose.Model<ITipiEtichetteRegistries>;

/* --------
* Module Exports
* -------- */
export default TipiEtichetteRegistries;

export { TipiEtichetteRegistriesSchema };

export type TTipiEtichetteRegistriesModel = Omit<typeof TipiEtichetteRegistries, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiEtichetteRegistries>): any
};

export type TTipiEtichetteRegistriesDocument = 
& mongoose.Document<any, {}, ITipiEtichetteRegistries>
& ITipiEtichetteRegistries;

export { ITipiEtichetteRegistries };