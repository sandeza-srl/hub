import * as mongoose from 'mongoose';

import DisponibilitaRisorseSchema from './DisponibilitaRisorse.Schema';
import type { IDisponibilitaRisorse } from './DisponibilitaRisorse.Types';


/* --------
* Model Definition
* -------- */
const DisponibilitaRisorse = mongoose.model<IDisponibilitaRisorse>(
'DisponibilitaRisorse',
DisponibilitaRisorseSchema as any
) as mongoose.Model<IDisponibilitaRisorse>;

/* --------
* Module Exports
* -------- */
export default DisponibilitaRisorse;

export { DisponibilitaRisorseSchema };

export type TDisponibilitaRisorseModel = Omit<typeof DisponibilitaRisorse, 'traslateAliases'> & {
translateAliases(raw: Partial<IDisponibilitaRisorse>): any
};

export type TDisponibilitaRisorseDocument = 
& mongoose.Document<any, {}, IDisponibilitaRisorse>
& IDisponibilitaRisorse;

export { IDisponibilitaRisorse };