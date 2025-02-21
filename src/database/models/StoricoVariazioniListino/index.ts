import * as mongoose from 'mongoose';

import StoricoVariazioniListinoSchema from './StoricoVariazioniListino.Schema';
import type { IStoricoVariazioniListino } from './StoricoVariazioniListino.Types';


/* --------
* Model Definition
* -------- */
const StoricoVariazioniListino = mongoose.model<IStoricoVariazioniListino>(
'StoricoVariazioniListino',
StoricoVariazioniListinoSchema as any
) as mongoose.Model<IStoricoVariazioniListino>;

/* --------
* Module Exports
* -------- */
export default StoricoVariazioniListino;

export { StoricoVariazioniListinoSchema };

export type TStoricoVariazioniListinoModel = Omit<typeof StoricoVariazioniListino, 'traslateAliases'> & {
translateAliases(raw: Partial<IStoricoVariazioniListino>): any
};

export type TStoricoVariazioniListinoDocument = 
& mongoose.Document<any, {}, IStoricoVariazioniListino>
& IStoricoVariazioniListino;

export { IStoricoVariazioniListino };