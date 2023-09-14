import * as mongoose from 'mongoose';

import TipiEtichetteValoriAutomaticiSchema from './TipiEtichetteValoriAutomatici.Schema';
import type { ITipiEtichetteValoriAutomatici } from './TipiEtichetteValoriAutomatici.Types';


/* --------
* Model Definition
* -------- */
const TipiEtichetteValoriAutomatici = mongoose.model<ITipiEtichetteValoriAutomatici>(
  'TipiEtichetteValoriAutomatici',
  TipiEtichetteValoriAutomaticiSchema as any
) as mongoose.Model<ITipiEtichetteValoriAutomatici>;

/* --------
* Module Exports
* -------- */
export default TipiEtichetteValoriAutomatici;

export { TipiEtichetteValoriAutomaticiSchema };

export type TTipiEtichetteValoriAutomaticiModel = Omit<typeof TipiEtichetteValoriAutomatici, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiEtichetteValoriAutomatici>): any
};

export type TTipiEtichetteValoriAutomaticiDocument = 
& mongoose.Document<any, {}, ITipiEtichetteValoriAutomatici>
& ITipiEtichetteValoriAutomatici;

export { ITipiEtichetteValoriAutomatici };