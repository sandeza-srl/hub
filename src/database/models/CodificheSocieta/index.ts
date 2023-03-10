import * as mongoose from 'mongoose';

import CodificheSocietaSchema from './CodificheSocieta.Schema';
import type { ICodificheSocieta } from './CodificheSocieta.Types';


/* --------
* Model Definition
* -------- */
const CodificheSocieta = mongoose.model<ICodificheSocieta>(
  'CodificheSocieta',
  CodificheSocietaSchema as any
) as mongoose.Model<ICodificheSocieta>;

/* --------
* Module Exports
* -------- */
export default CodificheSocieta;

export { CodificheSocietaSchema };

export type TCodificheSocietaModel = typeof CodificheSocieta;

export type TCodificheSocietaDocument = 
& mongoose.Document<any, {}, ICodificheSocieta>
& ICodificheSocieta;

export { ICodificheSocieta };