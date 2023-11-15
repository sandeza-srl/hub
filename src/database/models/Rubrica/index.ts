import * as mongoose from 'mongoose';

import RubricaSchema from './Rubrica.Schema';
import type { IRubrica } from './Rubrica.Types';


/* --------
* Model Definition
* -------- */
const Rubrica = mongoose.model<IRubrica>(
  'Rubrica',
  RubricaSchema as any
) as mongoose.Model<IRubrica>;

/* --------
* Module Exports
* -------- */
export default Rubrica;

export { RubricaSchema };

export type TRubricaModel = Omit<typeof Rubrica, 'traslateAliases'> & {
  translateAliases(raw: Partial<IRubrica>): any
};

export type TRubricaDocument = 
& mongoose.Document<any, {}, IRubrica>
& IRubrica;

export { IRubrica };