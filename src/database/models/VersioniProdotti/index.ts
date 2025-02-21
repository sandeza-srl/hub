import * as mongoose from 'mongoose';

import VersioniProdottiSchema from './VersioniProdotti.Schema';
import type { IVersioniProdotti } from './VersioniProdotti.Types';


/* --------
* Model Definition
* -------- */
const VersioniProdotti = mongoose.model<IVersioniProdotti>(
'VersioniProdotti',
VersioniProdottiSchema as any
) as mongoose.Model<IVersioniProdotti>;

/* --------
* Module Exports
* -------- */
export default VersioniProdotti;

export { VersioniProdottiSchema };

export type TVersioniProdottiModel = Omit<typeof VersioniProdotti, 'traslateAliases'> & {
translateAliases(raw: Partial<IVersioniProdotti>): any
};

export type TVersioniProdottiDocument = 
& mongoose.Document<any, {}, IVersioniProdotti>
& IVersioniProdotti;

export { IVersioniProdotti };