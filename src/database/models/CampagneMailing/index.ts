import * as mongoose from 'mongoose';

import CampagneMailingSchema from './CampagneMailing.Schema';
import type { ICampagneMailing } from './CampagneMailing.Types';


/* --------
* Model Definition
* -------- */
const CampagneMailing = mongoose.model<ICampagneMailing>(
  'CampagneMailing',
  CampagneMailingSchema as any
) as mongoose.Model<ICampagneMailing>;

/* --------
* Module Exports
* -------- */
export default CampagneMailing;

export { CampagneMailingSchema };

export type TCampagneMailingModel = typeof CampagneMailing;

export type TCampagneMailingDocument = 
& mongoose.Document<any, {}, ICampagneMailing>
& ICampagneMailing;

export { ICampagneMailing };