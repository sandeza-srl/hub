import * as mongoose from 'mongoose';

import P_ImpegniRisorseSchema from './P_ImpegniRisorse.Schema';
import type { IP_ImpegniRisorse } from './P_ImpegniRisorse.Types';


/* --------
* Model Definition
* -------- */
const P_ImpegniRisorse = mongoose.model<IP_ImpegniRisorse>(
'P_ImpegniRisorse',
P_ImpegniRisorseSchema as any
) as mongoose.Model<IP_ImpegniRisorse>;

/* --------
* Module Exports
* -------- */
export default P_ImpegniRisorse;

export { P_ImpegniRisorseSchema };

export type TP_ImpegniRisorseModel = Omit<typeof P_ImpegniRisorse, 'traslateAliases'> & {
translateAliases(raw: Partial<IP_ImpegniRisorse>): any
};

export type TP_ImpegniRisorseDocument = 
& mongoose.Document<any, {}, IP_ImpegniRisorse>
& IP_ImpegniRisorse;

export { IP_ImpegniRisorse };