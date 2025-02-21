import * as mongoose from 'mongoose';

import FattureDaSDISchema from './FattureDaSDI.Schema';
import type { IFattureDaSDI } from './FattureDaSDI.Types';


/* --------
* Model Definition
* -------- */
const FattureDaSDI = mongoose.model<IFattureDaSDI>(
'FattureDaSDI',
FattureDaSDISchema as any
) as mongoose.Model<IFattureDaSDI>;

/* --------
* Module Exports
* -------- */
export default FattureDaSDI;

export { FattureDaSDISchema };

export type TFattureDaSDIModel = Omit<typeof FattureDaSDI, 'traslateAliases'> & {
translateAliases(raw: Partial<IFattureDaSDI>): any
};

export type TFattureDaSDIDocument = 
& mongoose.Document<any, {}, IFattureDaSDI>
& IFattureDaSDI;

export { IFattureDaSDI };