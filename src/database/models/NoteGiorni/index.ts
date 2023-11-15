import * as mongoose from 'mongoose';

import NoteGiorniSchema from './NoteGiorni.Schema';
import type { INoteGiorni } from './NoteGiorni.Types';


/* --------
* Model Definition
* -------- */
const NoteGiorni = mongoose.model<INoteGiorni>(
  'NoteGiorni',
  NoteGiorniSchema as any
) as mongoose.Model<INoteGiorni>;

/* --------
* Module Exports
* -------- */
export default NoteGiorni;

export { NoteGiorniSchema };

export type TNoteGiorniModel = Omit<typeof NoteGiorni, 'traslateAliases'> & {
  translateAliases(raw: Partial<INoteGiorni>): any
};

export type TNoteGiorniDocument = 
& mongoose.Document<any, {}, INoteGiorni>
& INoteGiorni;

export { INoteGiorni };