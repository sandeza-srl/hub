import * as mongoose from 'mongoose';

import ItemsPerVerificaFabbisogniSchema from './ItemsPerVerificaFabbisogni.Schema';
import type { IItemsPerVerificaFabbisogni } from './ItemsPerVerificaFabbisogni.Types';


/* --------
* Model Definition
* -------- */
const ItemsPerVerificaFabbisogni = mongoose.model<IItemsPerVerificaFabbisogni>(
'ItemsPerVerificaFabbisogni',
ItemsPerVerificaFabbisogniSchema as any
) as mongoose.Model<IItemsPerVerificaFabbisogni>;

/* --------
* Module Exports
* -------- */
export default ItemsPerVerificaFabbisogni;

export { ItemsPerVerificaFabbisogniSchema };

export type TItemsPerVerificaFabbisogniModel = Omit<typeof ItemsPerVerificaFabbisogni, 'traslateAliases'> & {
translateAliases(raw: Partial<IItemsPerVerificaFabbisogni>): any
};

export type TItemsPerVerificaFabbisogniDocument = 
& mongoose.Document<any, {}, IItemsPerVerificaFabbisogni>
& IItemsPerVerificaFabbisogni;

export { IItemsPerVerificaFabbisogni };