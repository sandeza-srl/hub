import * as mongoose from 'mongoose';

import VociPerVerificaFabbisogniSchema from './VociPerVerificaFabbisogni.Schema';
import type { IVociPerVerificaFabbisogni } from './VociPerVerificaFabbisogni.Types';


/* --------
* Model Definition
* -------- */
const VociPerVerificaFabbisogni = mongoose.model<IVociPerVerificaFabbisogni>(
'VociPerVerificaFabbisogni',
VociPerVerificaFabbisogniSchema as any
) as mongoose.Model<IVociPerVerificaFabbisogni>;

/* --------
* Module Exports
* -------- */
export default VociPerVerificaFabbisogni;

export { VociPerVerificaFabbisogniSchema };

export type TVociPerVerificaFabbisogniModel = Omit<typeof VociPerVerificaFabbisogni, 'traslateAliases'> & {
translateAliases(raw: Partial<IVociPerVerificaFabbisogni>): any
};

export type TVociPerVerificaFabbisogniDocument = 
& mongoose.Document<any, {}, IVociPerVerificaFabbisogni>
& IVociPerVerificaFabbisogni;

export { IVociPerVerificaFabbisogni };