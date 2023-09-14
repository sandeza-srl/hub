import * as mongoose from 'mongoose';

import StoricoStatoStrumentoSchema from './StoricoStatoStrumento.Schema';
import type { IStoricoStatoStrumento } from './StoricoStatoStrumento.Types';


/* --------
* Model Definition
* -------- */
const StoricoStatoStrumento = mongoose.model<IStoricoStatoStrumento>(
  'StoricoStatoStrumento',
  StoricoStatoStrumentoSchema as any
) as mongoose.Model<IStoricoStatoStrumento>;

/* --------
* Module Exports
* -------- */
export default StoricoStatoStrumento;

export { StoricoStatoStrumentoSchema };

export type TStoricoStatoStrumentoModel = Omit<typeof StoricoStatoStrumento, 'traslateAliases'> & {
  translateAliases(raw: Partial<IStoricoStatoStrumento>): any
};

export type TStoricoStatoStrumentoDocument = 
& mongoose.Document<any, {}, IStoricoStatoStrumento>
& IStoricoStatoStrumento;

export { IStoricoStatoStrumento };