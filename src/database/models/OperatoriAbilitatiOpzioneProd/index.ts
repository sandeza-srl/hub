import * as mongoose from 'mongoose';

import OperatoriAbilitatiOpzioneProdSchema from './OperatoriAbilitatiOpzioneProd.Schema';
import type { IOperatoriAbilitatiOpzioneProd } from './OperatoriAbilitatiOpzioneProd.Types';


/* --------
* Model Definition
* -------- */
const OperatoriAbilitatiOpzioneProd = mongoose.model<IOperatoriAbilitatiOpzioneProd>(
  'OperatoriAbilitatiOpzioneProd',
  OperatoriAbilitatiOpzioneProdSchema as any
) as mongoose.Model<IOperatoriAbilitatiOpzioneProd>;

/* --------
* Module Exports
* -------- */
export default OperatoriAbilitatiOpzioneProd;

export { OperatoriAbilitatiOpzioneProdSchema };

export type TOperatoriAbilitatiOpzioneProdModel = Omit<typeof OperatoriAbilitatiOpzioneProd, 'traslateAliases'> & {
  translateAliases(raw: Partial<IOperatoriAbilitatiOpzioneProd>): any
};

export type TOperatoriAbilitatiOpzioneProdDocument = 
& mongoose.Document<any, {}, IOperatoriAbilitatiOpzioneProd>
& IOperatoriAbilitatiOpzioneProd;

export { IOperatoriAbilitatiOpzioneProd };