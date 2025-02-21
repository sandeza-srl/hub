import * as mongoose from 'mongoose';

import StatiPosizioniSchema from './StatiPosizioni.Schema';
import type { IStatiPosizioni } from './StatiPosizioni.Types';


/* --------
* Model Definition
* -------- */
const StatiPosizioni = mongoose.model<IStatiPosizioni>(
'StatiPosizioni',
StatiPosizioniSchema as any
) as mongoose.Model<IStatiPosizioni>;

/* --------
* Module Exports
* -------- */
export default StatiPosizioni;

export { StatiPosizioniSchema };

export type TStatiPosizioniModel = Omit<typeof StatiPosizioni, 'traslateAliases'> & {
translateAliases(raw: Partial<IStatiPosizioni>): any
};

export type TStatiPosizioniDocument = 
& mongoose.Document<any, {}, IStatiPosizioni>
& IStatiPosizioni;

export { IStatiPosizioni };