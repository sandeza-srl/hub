import * as mongoose from 'mongoose';

import PostazioniOrigineSchema from './PostazioniOrigine.Schema';
import type { IPostazioniOrigine } from './PostazioniOrigine.Types';


/* --------
* Model Definition
* -------- */
const PostazioniOrigine = mongoose.model<IPostazioniOrigine>(
  'PostazioniOrigine',
  PostazioniOrigineSchema as any
) as mongoose.Model<IPostazioniOrigine>;

/* --------
* Module Exports
* -------- */
export default PostazioniOrigine;

export { PostazioniOrigineSchema };

export type TPostazioniOrigineModel = Omit<typeof PostazioniOrigine, 'traslateAliases'> & {
  translateAliases(raw: Partial<IPostazioniOrigine>): any
};

export type TPostazioniOrigineDocument = 
& mongoose.Document<any, {}, IPostazioniOrigine>
& IPostazioniOrigine;

export { IPostazioniOrigine };