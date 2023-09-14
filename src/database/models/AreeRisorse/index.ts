import * as mongoose from 'mongoose';

import AreeRisorseSchema from './AreeRisorse.Schema';
import type { IAreeRisorse } from './AreeRisorse.Types';


/* --------
* Model Definition
* -------- */
const AreeRisorse = mongoose.model<IAreeRisorse>(
  'AreeRisorse',
  AreeRisorseSchema as any
) as mongoose.Model<IAreeRisorse>;

/* --------
* Module Exports
* -------- */
export default AreeRisorse;

export { AreeRisorseSchema };

export type TAreeRisorseModel = Omit<typeof AreeRisorse, 'traslateAliases'> & {
  translateAliases(raw: Partial<IAreeRisorse>): any
};

export type TAreeRisorseDocument = 
& mongoose.Document<any, {}, IAreeRisorse>
& IAreeRisorse;

export { IAreeRisorse };