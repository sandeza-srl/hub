import * as mongoose from 'mongoose';

import CodificheNaturaEsenzioneSchema from './CodificheNaturaEsenzione.Schema';
import type { ICodificheNaturaEsenzione } from './CodificheNaturaEsenzione.Types';


/* --------
* Model Definition
* -------- */
const CodificheNaturaEsenzione = mongoose.model<ICodificheNaturaEsenzione>(
  'CodificheNaturaEsenzione',
  CodificheNaturaEsenzioneSchema as any
) as mongoose.Model<ICodificheNaturaEsenzione>;

/* --------
* Module Exports
* -------- */
export default CodificheNaturaEsenzione;

export { CodificheNaturaEsenzioneSchema };

export type TCodificheNaturaEsenzioneModel = Omit<typeof CodificheNaturaEsenzione, 'traslateAliases'> & {
  translateAliases(raw: Partial<ICodificheNaturaEsenzione>): any
};

export type TCodificheNaturaEsenzioneDocument = 
& mongoose.Document<any, {}, ICodificheNaturaEsenzione>
& ICodificheNaturaEsenzione;

export { ICodificheNaturaEsenzione };