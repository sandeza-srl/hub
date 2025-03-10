import * as mongoose from 'mongoose';

import TipiRigheOrdineSchema from './TipiRigheOrdine.Schema';
import type { ITipiRigheOrdine } from './TipiRigheOrdine.Types';


/* --------
* Model Definition
* -------- */
const TipiRigheOrdine = mongoose.model<ITipiRigheOrdine>(
'TipiRigheOrdine',
TipiRigheOrdineSchema as any
) as mongoose.Model<ITipiRigheOrdine>;

/* --------
* Module Exports
* -------- */
export default TipiRigheOrdine;

export { TipiRigheOrdineSchema };

export type TTipiRigheOrdineModel = Omit<typeof TipiRigheOrdine, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiRigheOrdine>): any
};

export type TTipiRigheOrdineDocument = 
& mongoose.Document<any, {}, ITipiRigheOrdine>
& ITipiRigheOrdine;

export { ITipiRigheOrdine };