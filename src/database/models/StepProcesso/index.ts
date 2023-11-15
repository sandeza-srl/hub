import * as mongoose from 'mongoose';

import StepProcessoSchema from './StepProcesso.Schema';
import type { IStepProcesso } from './StepProcesso.Types';


/* --------
* Model Definition
* -------- */
const StepProcesso = mongoose.model<IStepProcesso>(
  'StepProcesso',
  StepProcessoSchema as any
) as mongoose.Model<IStepProcesso>;

/* --------
* Module Exports
* -------- */
export default StepProcesso;

export { StepProcessoSchema };

export type TStepProcessoModel = Omit<typeof StepProcesso, 'traslateAliases'> & {
  translateAliases(raw: Partial<IStepProcesso>): any
};

export type TStepProcessoDocument = 
& mongoose.Document<any, {}, IStepProcesso>
& IStepProcesso;

export { IStepProcesso };