import * as mongoose from 'mongoose';

import ProdottiSchema from './Prodotti.Schema';
import type { IProdotti } from './Prodotti.Types';


/* --------
* Model Definition
* -------- */
const Prodotti = mongoose.model<IProdotti>(
'Prodotti',
ProdottiSchema as any
) as mongoose.Model<IProdotti>;

/* --------
* Module Exports
* -------- */
export default Prodotti;

export { ProdottiSchema };

export type TProdottiModel = Omit<typeof Prodotti, 'traslateAliases'> & {
translateAliases(raw: Partial<IProdotti>): any
};

export type TProdottiDocument = 
& mongoose.Document<any, {}, IProdotti>
& IProdotti;

export { IProdotti };