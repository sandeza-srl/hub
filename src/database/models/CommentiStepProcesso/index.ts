import * as mongoose from 'mongoose';

import CommentiStepProcessoSchema from './CommentiStepProcesso.Schema';
import type { ICommentiStepProcesso } from './CommentiStepProcesso.Types';


/* --------
* Model Definition
* -------- */
const CommentiStepProcesso = mongoose.model<ICommentiStepProcesso>(
'CommentiStepProcesso',
CommentiStepProcessoSchema as any
) as mongoose.Model<ICommentiStepProcesso>;

/* --------
* Module Exports
* -------- */
export default CommentiStepProcesso;

export { CommentiStepProcessoSchema };

export type TCommentiStepProcessoModel = Omit<typeof CommentiStepProcesso, 'traslateAliases'> & {
translateAliases(raw: Partial<ICommentiStepProcesso>): any
};

export type TCommentiStepProcessoDocument = 
& mongoose.Document<any, {}, ICommentiStepProcesso>
& ICommentiStepProcesso;

export { ICommentiStepProcesso };