import * as mongoose from 'mongoose';

import ProblemiImpiantiSchema from './ProblemiImpianti.Schema';
import type { IProblemiImpianti } from './ProblemiImpianti.Types';


/* --------
* Model Definition
* -------- */
const ProblemiImpianti = mongoose.model<IProblemiImpianti>(
  'ProblemiImpianti',
  ProblemiImpiantiSchema as any
) as mongoose.Model<IProblemiImpianti>;

/* --------
* Module Exports
* -------- */
export default ProblemiImpianti;

export { ProblemiImpiantiSchema };

export type TProblemiImpiantiModel = typeof ProblemiImpianti;

export type TProblemiImpiantiDocument = 
& mongoose.Document<any, {}, IProblemiImpianti>
& IProblemiImpianti;

export { IProblemiImpianti };