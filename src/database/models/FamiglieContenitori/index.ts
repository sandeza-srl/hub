import * as mongoose from 'mongoose';

import FamiglieContenitoriSchema from './FamiglieContenitori.Schema';
import type { IFamiglieContenitori } from './FamiglieContenitori.Types';


/* --------
* Model Definition
* -------- */
const FamiglieContenitori = mongoose.model<IFamiglieContenitori>(
'FamiglieContenitori',
FamiglieContenitoriSchema as any
) as mongoose.Model<IFamiglieContenitori>;

/* --------
* Module Exports
* -------- */
export default FamiglieContenitori;

export { FamiglieContenitoriSchema };

export type TFamiglieContenitoriModel = Omit<typeof FamiglieContenitori, 'traslateAliases'> & {
translateAliases(raw: Partial<IFamiglieContenitori>): any
};

export type TFamiglieContenitoriDocument = 
& mongoose.Document<any, {}, IFamiglieContenitori>
& IFamiglieContenitori;

export { IFamiglieContenitori };