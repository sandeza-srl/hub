import * as mongoose from 'mongoose';

import ContenitoriSchema from './Contenitori.Schema';
import type { IContenitori } from './Contenitori.Types';


/* --------
* Model Definition
* -------- */
const Contenitori = mongoose.model<IContenitori>(
'Contenitori',
ContenitoriSchema as any
) as mongoose.Model<IContenitori>;

/* --------
* Module Exports
* -------- */
export default Contenitori;

export { ContenitoriSchema };

export type TContenitoriModel = Omit<typeof Contenitori, 'traslateAliases'> & {
translateAliases(raw: Partial<IContenitori>): any
};

export type TContenitoriDocument = 
& mongoose.Document<any, {}, IContenitori>
& IContenitori;

export { IContenitori };