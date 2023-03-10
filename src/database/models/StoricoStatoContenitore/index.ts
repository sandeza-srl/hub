import * as mongoose from 'mongoose';

import StoricoStatoContenitoreSchema from './StoricoStatoContenitore.Schema';
import type { IStoricoStatoContenitore } from './StoricoStatoContenitore.Types';


/* --------
* Model Definition
* -------- */
const StoricoStatoContenitore = mongoose.model<IStoricoStatoContenitore>(
  'StoricoStatoContenitore',
  StoricoStatoContenitoreSchema as any
) as mongoose.Model<IStoricoStatoContenitore>;

/* --------
* Module Exports
* -------- */
export default StoricoStatoContenitore;

export { StoricoStatoContenitoreSchema };

export type TStoricoStatoContenitoreModel = typeof StoricoStatoContenitore;

export type TStoricoStatoContenitoreDocument = 
& mongoose.Document<any, {}, IStoricoStatoContenitore>
& IStoricoStatoContenitore;

export { IStoricoStatoContenitore };