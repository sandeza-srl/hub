import * as mongoose from 'mongoose';

import OperatoriProduzioneSchema from './OperatoriProduzione.Schema';
import type { IOperatoriProduzione } from './OperatoriProduzione.Types';


/* --------
* Model Definition
* -------- */
const OperatoriProduzione = mongoose.model<IOperatoriProduzione>(
'OperatoriProduzione',
OperatoriProduzioneSchema as any
) as mongoose.Model<IOperatoriProduzione>;

/* --------
* Module Exports
* -------- */
export default OperatoriProduzione;

export { OperatoriProduzioneSchema };

export type TOperatoriProduzioneModel = Omit<typeof OperatoriProduzione, 'traslateAliases'> & {
translateAliases(raw: Partial<IOperatoriProduzione>): any
};

export type TOperatoriProduzioneDocument = 
& mongoose.Document<any, {}, IOperatoriProduzione>
& IOperatoriProduzione;

export { IOperatoriProduzione };