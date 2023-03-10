import * as mongoose from 'mongoose';

import IndirizziCampagneMailingSchema from './IndirizziCampagneMailing.Schema';
import type { IIndirizziCampagneMailing } from './IndirizziCampagneMailing.Types';


/* --------
* Model Definition
* -------- */
const IndirizziCampagneMailing = mongoose.model<IIndirizziCampagneMailing>(
  'IndirizziCampagneMailing',
  IndirizziCampagneMailingSchema as any
) as mongoose.Model<IIndirizziCampagneMailing>;

/* --------
* Module Exports
* -------- */
export default IndirizziCampagneMailing;

export { IndirizziCampagneMailingSchema };

export type TIndirizziCampagneMailingModel = typeof IndirizziCampagneMailing;

export type TIndirizziCampagneMailingDocument = 
& mongoose.Document<any, {}, IIndirizziCampagneMailing>
& IIndirizziCampagneMailing;

export { IIndirizziCampagneMailing };