import * as mongoose from 'mongoose';

import DocContabiliDaContabilizzareSchema from './DocContabiliDaContabilizzare.Schema';
import type { IDocContabiliDaContabilizzare } from './DocContabiliDaContabilizzare.Types';


/* --------
* Model Definition
* -------- */
const DocContabiliDaContabilizzare = mongoose.model<IDocContabiliDaContabilizzare>(
'DocContabiliDaContabilizzare',
DocContabiliDaContabilizzareSchema as any
) as mongoose.Model<IDocContabiliDaContabilizzare>;

/* --------
* Module Exports
* -------- */
export default DocContabiliDaContabilizzare;

export { DocContabiliDaContabilizzareSchema };

export type TDocContabiliDaContabilizzareModel = Omit<typeof DocContabiliDaContabilizzare, 'traslateAliases'> & {
translateAliases(raw: Partial<IDocContabiliDaContabilizzare>): any
};

export type TDocContabiliDaContabilizzareDocument = 
& mongoose.Document<any, {}, IDocContabiliDaContabilizzare>
& IDocContabiliDaContabilizzare;

export { IDocContabiliDaContabilizzare };