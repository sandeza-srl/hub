import * as mongoose from 'mongoose';

import MontaggioUtensiliFaseProduzioneSchema from './MontaggioUtensiliFaseProduzione.Schema';
import type { IMontaggioUtensiliFaseProduzione } from './MontaggioUtensiliFaseProduzione.Types';


/* --------
* Model Definition
* -------- */
const MontaggioUtensiliFaseProduzione = mongoose.model<IMontaggioUtensiliFaseProduzione>(
'MontaggioUtensiliFaseProduzione',
MontaggioUtensiliFaseProduzioneSchema as any
) as mongoose.Model<IMontaggioUtensiliFaseProduzione>;

/* --------
* Module Exports
* -------- */
export default MontaggioUtensiliFaseProduzione;

export { MontaggioUtensiliFaseProduzioneSchema };

export type TMontaggioUtensiliFaseProduzioneModel = Omit<typeof MontaggioUtensiliFaseProduzione, 'traslateAliases'> & {
translateAliases(raw: Partial<IMontaggioUtensiliFaseProduzione>): any
};

export type TMontaggioUtensiliFaseProduzioneDocument = 
& mongoose.Document<any, {}, IMontaggioUtensiliFaseProduzione>
& IMontaggioUtensiliFaseProduzione;

export { IMontaggioUtensiliFaseProduzione };