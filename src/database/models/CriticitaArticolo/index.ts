import * as mongoose from 'mongoose';

import CriticitaArticoloSchema from './CriticitaArticolo.Schema';
import type { ICriticitaArticolo } from './CriticitaArticolo.Types';


/* --------
* Model Definition
* -------- */
const CriticitaArticolo = mongoose.model<ICriticitaArticolo>(
  'CriticitaArticolo',
  CriticitaArticoloSchema as any
) as mongoose.Model<ICriticitaArticolo>;

/* --------
* Module Exports
* -------- */
export default CriticitaArticolo;

export { CriticitaArticoloSchema };

export type TCriticitaArticoloModel = Omit<typeof CriticitaArticolo, 'traslateAliases'> & {
  translateAliases(raw: Partial<ICriticitaArticolo>): any
};

export type TCriticitaArticoloDocument = 
& mongoose.Document<any, {}, ICriticitaArticolo>
& ICriticitaArticolo;

export { ICriticitaArticolo };