import * as mongoose from 'mongoose';

import RegistrazioniOreStepProcessoSchema from './RegistrazioniOreStepProcesso.Schema';
import type { IRegistrazioniOreStepProcesso } from './RegistrazioniOreStepProcesso.Types';


/* --------
* Model Definition
* -------- */
const RegistrazioniOreStepProcesso = mongoose.model<IRegistrazioniOreStepProcesso>(
'RegistrazioniOreStepProcesso',
RegistrazioniOreStepProcessoSchema as any
) as mongoose.Model<IRegistrazioniOreStepProcesso>;

/* --------
* Module Exports
* -------- */
export default RegistrazioniOreStepProcesso;

export { RegistrazioniOreStepProcessoSchema };

export type TRegistrazioniOreStepProcessoModel = Omit<typeof RegistrazioniOreStepProcesso, 'traslateAliases'> & {
translateAliases(raw: Partial<IRegistrazioniOreStepProcesso>): any
};

export type TRegistrazioniOreStepProcessoDocument = 
& mongoose.Document<any, {}, IRegistrazioniOreStepProcesso>
& IRegistrazioniOreStepProcesso;

export { IRegistrazioniOreStepProcesso };