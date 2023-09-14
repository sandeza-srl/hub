import * as mongoose from 'mongoose';

import FermiSchema from './Fermi.Schema';
import type { IFermi } from './Fermi.Types';


/* --------
* Model Definition
* -------- */
const Fermi = mongoose.model<IFermi>(
  'Fermi',
  FermiSchema as any
) as mongoose.Model<IFermi>;

/* --------
* Module Exports
* -------- */
export default Fermi;

export { FermiSchema };

export type TFermiModel = Omit<typeof Fermi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IFermi>): any
};

export type TFermiDocument = 
& mongoose.Document<any, {}, IFermi>
& IFermi;

export { IFermi };