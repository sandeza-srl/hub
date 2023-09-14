import * as mongoose from 'mongoose';

import CapitoliRevisioniSchema from './CapitoliRevisioni.Schema';
import type { ICapitoliRevisioni } from './CapitoliRevisioni.Types';


/* --------
* Model Definition
* -------- */
const CapitoliRevisioni = mongoose.model<ICapitoliRevisioni>(
  'CapitoliRevisioni',
  CapitoliRevisioniSchema as any
) as mongoose.Model<ICapitoliRevisioni>;

/* --------
* Module Exports
* -------- */
export default CapitoliRevisioni;

export { CapitoliRevisioniSchema };

export type TCapitoliRevisioniModel = Omit<typeof CapitoliRevisioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<ICapitoliRevisioni>): any
};

export type TCapitoliRevisioniDocument = 
& mongoose.Document<any, {}, ICapitoliRevisioni>
& ICapitoliRevisioni;

export { ICapitoliRevisioni };