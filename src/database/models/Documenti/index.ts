import * as mongoose from 'mongoose';

import DocumentiSchema from './Documenti.Schema';
import type { IDocumenti } from './Documenti.Types';


/* --------
* Model Definition
* -------- */
const Documenti = mongoose.model<IDocumenti>(
'Documenti',
DocumentiSchema as any
) as mongoose.Model<IDocumenti>;

/* --------
* Module Exports
* -------- */
export default Documenti;

export { DocumentiSchema };

export type TDocumentiModel = Omit<typeof Documenti, 'traslateAliases'> & {
translateAliases(raw: Partial<IDocumenti>): any
};

export type TDocumentiDocument = 
& mongoose.Document<any, {}, IDocumenti>
& IDocumenti;

export { IDocumenti };