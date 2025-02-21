import * as mongoose from 'mongoose';

import NoteReleaseSchema from './NoteRelease.Schema';
import type { INoteRelease } from './NoteRelease.Types';


/* --------
* Model Definition
* -------- */
const NoteRelease = mongoose.model<INoteRelease>(
'NoteRelease',
NoteReleaseSchema as any
) as mongoose.Model<INoteRelease>;

/* --------
* Module Exports
* -------- */
export default NoteRelease;

export { NoteReleaseSchema };

export type TNoteReleaseModel = Omit<typeof NoteRelease, 'traslateAliases'> & {
translateAliases(raw: Partial<INoteRelease>): any
};

export type TNoteReleaseDocument = 
& mongoose.Document<any, {}, INoteRelease>
& INoteRelease;

export { INoteRelease };