import * as mongoose from 'mongoose';

import ImpostazioneCostiRisorseSchema from './ImpostazioneCostiRisorse.Schema';
import type { IImpostazioneCostiRisorse } from './ImpostazioneCostiRisorse.Types';


/* --------
* Model Definition
* -------- */
const ImpostazioneCostiRisorse = mongoose.model<IImpostazioneCostiRisorse>(
  'ImpostazioneCostiRisorse',
  ImpostazioneCostiRisorseSchema as any
) as mongoose.Model<IImpostazioneCostiRisorse>;

/* --------
* Module Exports
* -------- */
export default ImpostazioneCostiRisorse;

export { ImpostazioneCostiRisorseSchema };

export type TImpostazioneCostiRisorseModel = Omit<typeof ImpostazioneCostiRisorse, 'traslateAliases'> & {
  translateAliases(raw: Partial<IImpostazioneCostiRisorse>): any
};

export type TImpostazioneCostiRisorseDocument = 
& mongoose.Document<any, {}, IImpostazioneCostiRisorse>
& IImpostazioneCostiRisorse;

export { IImpostazioneCostiRisorse };