import * as mongoose from 'mongoose';

import StoricoStatoImpiantoSchema from './StoricoStatoImpianto.Schema';
import type { IStoricoStatoImpianto } from './StoricoStatoImpianto.Types';


/* --------
* Model Definition
* -------- */
const StoricoStatoImpianto = mongoose.model<IStoricoStatoImpianto>(
  'StoricoStatoImpianto',
  StoricoStatoImpiantoSchema as any
) as mongoose.Model<IStoricoStatoImpianto>;

/* --------
* Module Exports
* -------- */
export default StoricoStatoImpianto;

export { StoricoStatoImpiantoSchema };

export type TStoricoStatoImpiantoModel = Omit<typeof StoricoStatoImpianto, 'traslateAliases'> & {
  translateAliases(raw: Partial<IStoricoStatoImpianto>): any
};

export type TStoricoStatoImpiantoDocument = 
& mongoose.Document<any, {}, IStoricoStatoImpianto>
& IStoricoStatoImpianto;

export { IStoricoStatoImpianto };