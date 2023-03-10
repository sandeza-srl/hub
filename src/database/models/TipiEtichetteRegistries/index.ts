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

export type TTipiEtichetteRegistriesModel = typeof TipiEtichetteRegistries;

export type TTipiEtichetteRegistriesDocument = 
& mongoose.Document<any, {}, ITipiEtichetteRegistries>
& ITipiEtichetteRegistries;

export { ITipiEtichetteRegistries };