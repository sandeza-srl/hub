import * as mongoose from 'mongoose';

import CapitoliAppoggioSchema from './CapitoliAppoggio.Schema';
import type { ICapitoliAppoggio } from './CapitoliAppoggio.Types';


/* --------
* Model Definition
* -------- */
const CapitoliAppoggio = mongoose.model<ICapitoliAppoggio>(
'CapitoliAppoggio',
CapitoliAppoggioSchema as any
) as mongoose.Model<ICapitoliAppoggio>;

/* --------
* Module Exports
* -------- */
export default CapitoliAppoggio;

export { CapitoliAppoggioSchema };

export type TCapitoliAppoggioModel = Omit<typeof CapitoliAppoggio, 'traslateAliases'> & {
translateAliases(raw: Partial<ICapitoliAppoggio>): any
};

export type TCapitoliAppoggioDocument = 
& mongoose.Document<any, {}, ICapitoliAppoggio>
& ICapitoliAppoggio;

export { ICapitoliAppoggio };