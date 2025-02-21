import * as mongoose from 'mongoose';

import DescrizioneAliquoteSchema from './DescrizioneAliquote.Schema';
import type { IDescrizioneAliquote } from './DescrizioneAliquote.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneAliquote = mongoose.model<IDescrizioneAliquote>(
'DescrizioneAliquote',
DescrizioneAliquoteSchema as any
) as mongoose.Model<IDescrizioneAliquote>;

/* --------
* Module Exports
* -------- */
export default DescrizioneAliquote;

export { DescrizioneAliquoteSchema };

export type TDescrizioneAliquoteModel = Omit<typeof DescrizioneAliquote, 'traslateAliases'> & {
translateAliases(raw: Partial<IDescrizioneAliquote>): any
};

export type TDescrizioneAliquoteDocument = 
& mongoose.Document<any, {}, IDescrizioneAliquote>
& IDescrizioneAliquote;

export { IDescrizioneAliquote };