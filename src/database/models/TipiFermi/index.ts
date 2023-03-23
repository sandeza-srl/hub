import * as mongoose from 'mongoose';

import TipiFermiSchema from './TipiFermi.Schema';
import type { ITipiFermi } from './TipiFermi.Types';


/* --------
* Model Definition
* -------- */
const TipiFermi = mongoose.model<ITipiFermi>(
  'TipiFermi',
  TipiFermiSchema as any
) as mongoose.Model<ITipiFermi>;

/* --------
* Module Exports
* -------- */
export default TipiFermi;

export { TipiFermiSchema };

export type TTipiFermiModel = typeof TipiFermi;

export type TTipiFermiDocument = 
& mongoose.Document<any, {}, ITipiFermi>
& ITipiFermi;

export { ITipiFermi };