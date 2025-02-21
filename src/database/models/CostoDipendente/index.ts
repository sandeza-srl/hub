import * as mongoose from 'mongoose';

import CostoDipendenteSchema from './CostoDipendente.Schema';
import type { ICostoDipendente } from './CostoDipendente.Types';


/* --------
* Model Definition
* -------- */
const CostoDipendente = mongoose.model<ICostoDipendente>(
'CostoDipendente',
CostoDipendenteSchema as any
) as mongoose.Model<ICostoDipendente>;

/* --------
* Module Exports
* -------- */
export default CostoDipendente;

export { CostoDipendenteSchema };

export type TCostoDipendenteModel = Omit<typeof CostoDipendente, 'traslateAliases'> & {
translateAliases(raw: Partial<ICostoDipendente>): any
};

export type TCostoDipendenteDocument = 
& mongoose.Document<any, {}, ICostoDipendente>
& ICostoDipendente;

export { ICostoDipendente };