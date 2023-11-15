import * as mongoose from 'mongoose';

import DisponibilitaAppuntamentiSchema from './DisponibilitaAppuntamenti.Schema';
import type { IDisponibilitaAppuntamenti } from './DisponibilitaAppuntamenti.Types';


/* --------
* Model Definition
* -------- */
const DisponibilitaAppuntamenti = mongoose.model<IDisponibilitaAppuntamenti>(
  'DisponibilitaAppuntamenti',
  DisponibilitaAppuntamentiSchema as any
) as mongoose.Model<IDisponibilitaAppuntamenti>;

/* --------
* Module Exports
* -------- */
export default DisponibilitaAppuntamenti;

export { DisponibilitaAppuntamentiSchema };

export type TDisponibilitaAppuntamentiModel = Omit<typeof DisponibilitaAppuntamenti, 'traslateAliases'> & {
  translateAliases(raw: Partial<IDisponibilitaAppuntamenti>): any
};

export type TDisponibilitaAppuntamentiDocument = 
& mongoose.Document<any, {}, IDisponibilitaAppuntamenti>
& IDisponibilitaAppuntamenti;

export { IDisponibilitaAppuntamenti };