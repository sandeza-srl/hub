import * as mongoose from 'mongoose';

import FiltriEstrazioneContattiSchema from './FiltriEstrazioneContatti.Schema';
import type { IFiltriEstrazioneContatti } from './FiltriEstrazioneContatti.Types';


/* --------
* Model Definition
* -------- */
const FiltriEstrazioneContatti = mongoose.model<IFiltriEstrazioneContatti>(
'FiltriEstrazioneContatti',
FiltriEstrazioneContattiSchema as any
) as mongoose.Model<IFiltriEstrazioneContatti>;

/* --------
* Module Exports
* -------- */
export default FiltriEstrazioneContatti;

export { FiltriEstrazioneContattiSchema };

export type TFiltriEstrazioneContattiModel = Omit<typeof FiltriEstrazioneContatti, 'traslateAliases'> & {
translateAliases(raw: Partial<IFiltriEstrazioneContatti>): any
};

export type TFiltriEstrazioneContattiDocument = 
& mongoose.Document<any, {}, IFiltriEstrazioneContatti>
& IFiltriEstrazioneContatti;

export { IFiltriEstrazioneContatti };