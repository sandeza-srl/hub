import * as mongoose from 'mongoose';

import RegistrazioniFasiProduzioneSchema from './RegistrazioniFasiProduzione.Schema';
import type { IRegistrazioniFasiProduzione } from './RegistrazioniFasiProduzione.Types';


/* --------
* Model Definition
* -------- */
const RegistrazioniFasiProduzione = mongoose.model<IRegistrazioniFasiProduzione>(
'RegistrazioniFasiProduzione',
RegistrazioniFasiProduzioneSchema as any
) as mongoose.Model<IRegistrazioniFasiProduzione>;

/* --------
* Module Exports
* -------- */
export default RegistrazioniFasiProduzione;

export { RegistrazioniFasiProduzioneSchema };

export type TRegistrazioniFasiProduzioneModel = Omit<typeof RegistrazioniFasiProduzione, 'traslateAliases'> & {
translateAliases(raw: Partial<IRegistrazioniFasiProduzione>): any
};

export type TRegistrazioniFasiProduzioneDocument = 
& mongoose.Document<any, {}, IRegistrazioniFasiProduzione>
& IRegistrazioniFasiProduzione;

export { IRegistrazioniFasiProduzione };