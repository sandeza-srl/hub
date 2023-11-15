import * as mongoose from 'mongoose';

import StoricoStatiArticoloCicloSchema from './StoricoStatiArticoloCiclo.Schema';
import type { IStoricoStatiArticoloCiclo } from './StoricoStatiArticoloCiclo.Types';


/* --------
* Model Definition
* -------- */
const StoricoStatiArticoloCiclo = mongoose.model<IStoricoStatiArticoloCiclo>(
  'StoricoStatiArticoloCiclo',
  StoricoStatiArticoloCicloSchema as any
) as mongoose.Model<IStoricoStatiArticoloCiclo>;

/* --------
* Module Exports
* -------- */
export default StoricoStatiArticoloCiclo;

export { StoricoStatiArticoloCicloSchema };

export type TStoricoStatiArticoloCicloModel = Omit<typeof StoricoStatiArticoloCiclo, 'traslateAliases'> & {
  translateAliases(raw: Partial<IStoricoStatiArticoloCiclo>): any
};

export type TStoricoStatiArticoloCicloDocument = 
& mongoose.Document<any, {}, IStoricoStatiArticoloCiclo>
& IStoricoStatiArticoloCiclo;

export { IStoricoStatiArticoloCiclo };