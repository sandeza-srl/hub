import * as mongoose from 'mongoose';

import ProtocolliSchema from './Protocolli.Schema';
import type { IProtocolli } from './Protocolli.Types';


/* --------
* Model Definition
* -------- */
const Protocolli = mongoose.model<IProtocolli>(
  'Protocolli',
  ProtocolliSchema as any
) as mongoose.Model<IProtocolli>;

/* --------
* Module Exports
* -------- */
export default Protocolli;

export { ProtocolliSchema };

export type TProtocolliModel = Omit<typeof Protocolli, 'traslateAliases'> & {
  translateAliases(raw: Partial<IProtocolli>): any
};

export type TProtocolliDocument = 
& mongoose.Document<any, {}, IProtocolli>
& IProtocolli;

export { IProtocolli };