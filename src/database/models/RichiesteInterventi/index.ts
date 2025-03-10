import * as mongoose from 'mongoose';

import RichiesteInterventiSchema from './RichiesteInterventi.Schema';
import type { IRichiesteInterventi } from './RichiesteInterventi.Types';


/* --------
* Model Definition
* -------- */
const RichiesteInterventi = mongoose.model<IRichiesteInterventi>(
'RichiesteInterventi',
RichiesteInterventiSchema as any
) as mongoose.Model<IRichiesteInterventi>;

/* --------
* Module Exports
* -------- */
export default RichiesteInterventi;

export { RichiesteInterventiSchema };

export type TRichiesteInterventiModel = Omit<typeof RichiesteInterventi, 'traslateAliases'> & {
translateAliases(raw: Partial<IRichiesteInterventi>): any
};

export type TRichiesteInterventiDocument = 
& mongoose.Document<any, {}, IRichiesteInterventi>
& IRichiesteInterventi;

export { IRichiesteInterventi };