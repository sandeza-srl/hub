import * as mongoose from 'mongoose';

import TraduzioniEtichetteSchema from './TraduzioniEtichette.Schema';
import type { ITraduzioniEtichette } from './TraduzioniEtichette.Types';


/* --------
* Model Definition
* -------- */
const TraduzioniEtichette = mongoose.model<ITraduzioniEtichette>(
'TraduzioniEtichette',
TraduzioniEtichetteSchema as any
) as mongoose.Model<ITraduzioniEtichette>;

/* --------
* Module Exports
* -------- */
export default TraduzioniEtichette;

export { TraduzioniEtichetteSchema };

export type TTraduzioniEtichetteModel = Omit<typeof TraduzioniEtichette, 'traslateAliases'> & {
translateAliases(raw: Partial<ITraduzioniEtichette>): any
};

export type TTraduzioniEtichetteDocument = 
& mongoose.Document<any, {}, ITraduzioniEtichette>
& ITraduzioniEtichette;

export { ITraduzioniEtichette };