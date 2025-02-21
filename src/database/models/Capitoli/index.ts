import * as mongoose from 'mongoose';

import CapitoliSchema from './Capitoli.Schema';
import type { ICapitoli } from './Capitoli.Types';


/* --------
* Model Definition
* -------- */
const Capitoli = mongoose.model<ICapitoli>(
'Capitoli',
CapitoliSchema as any
) as mongoose.Model<ICapitoli>;

/* --------
* Module Exports
* -------- */
export default Capitoli;

export { CapitoliSchema };

export type TCapitoliModel = Omit<typeof Capitoli, 'traslateAliases'> & {
translateAliases(raw: Partial<ICapitoli>): any
};

export type TCapitoliDocument = 
& mongoose.Document<any, {}, ICapitoli>
& ICapitoli;

export { ICapitoli };