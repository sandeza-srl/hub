import * as mongoose from 'mongoose';

import RegistrazioniRisorseSchema from './RegistrazioniRisorse.Schema';
import type { IRegistrazioniRisorse } from './RegistrazioniRisorse.Types';


/* --------
* Model Definition
* -------- */
const RegistrazioniRisorse = mongoose.model<IRegistrazioniRisorse>(
'RegistrazioniRisorse',
RegistrazioniRisorseSchema as any
) as mongoose.Model<IRegistrazioniRisorse>;

/* --------
* Module Exports
* -------- */
export default RegistrazioniRisorse;

export { RegistrazioniRisorseSchema };

export type TRegistrazioniRisorseModel = Omit<typeof RegistrazioniRisorse, 'traslateAliases'> & {
translateAliases(raw: Partial<IRegistrazioniRisorse>): any
};

export type TRegistrazioniRisorseDocument = 
& mongoose.Document<any, {}, IRegistrazioniRisorse>
& IRegistrazioniRisorse;

export { IRegistrazioniRisorse };