import * as mongoose from 'mongoose';

import IndirizziRubricaSchema from './IndirizziRubrica.Schema';
import type { IIndirizziRubrica } from './IndirizziRubrica.Types';


/* --------
* Model Definition
* -------- */
const IndirizziRubrica = mongoose.model<IIndirizziRubrica>(
  'IndirizziRubrica',
  IndirizziRubricaSchema as any
) as mongoose.Model<IIndirizziRubrica>;

/* --------
* Module Exports
* -------- */
export default IndirizziRubrica;

export { IndirizziRubricaSchema };

export type TIndirizziRubricaModel = Omit<typeof IndirizziRubrica, 'traslateAliases'> & {
  translateAliases(raw: Partial<IIndirizziRubrica>): any
};

export type TIndirizziRubricaDocument = 
& mongoose.Document<any, {}, IIndirizziRubrica>
& IIndirizziRubrica;

export { IIndirizziRubrica };