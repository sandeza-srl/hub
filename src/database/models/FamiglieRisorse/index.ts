import * as mongoose from 'mongoose';

import FamiglieRisorseSchema from './FamiglieRisorse.Schema';
import type { IFamiglieRisorse } from './FamiglieRisorse.Types';


/* --------
* Model Definition
* -------- */
const FamiglieRisorse = mongoose.model<IFamiglieRisorse>(
  'FamiglieRisorse',
  FamiglieRisorseSchema as any
) as mongoose.Model<IFamiglieRisorse>;

/* --------
* Module Exports
* -------- */
export default FamiglieRisorse;

export { FamiglieRisorseSchema };

export type TFamiglieRisorseModel = Omit<typeof FamiglieRisorse, 'traslateAliases'> & {
  translateAliases(raw: Partial<IFamiglieRisorse>): any
};

export type TFamiglieRisorseDocument = 
& mongoose.Document<any, {}, IFamiglieRisorse>
& IFamiglieRisorse;

export { IFamiglieRisorse };