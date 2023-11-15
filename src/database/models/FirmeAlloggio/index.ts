import * as mongoose from 'mongoose';

import FirmeAlloggioSchema from './FirmeAlloggio.Schema';
import type { IFirmeAlloggio } from './FirmeAlloggio.Types';


/* --------
* Model Definition
* -------- */
const FirmeAlloggio = mongoose.model<IFirmeAlloggio>(
  'FirmeAlloggio',
  FirmeAlloggioSchema as any
) as mongoose.Model<IFirmeAlloggio>;

/* --------
* Module Exports
* -------- */
export default FirmeAlloggio;

export { FirmeAlloggioSchema };

export type TFirmeAlloggioModel = Omit<typeof FirmeAlloggio, 'traslateAliases'> & {
  translateAliases(raw: Partial<IFirmeAlloggio>): any
};

export type TFirmeAlloggioDocument = 
& mongoose.Document<any, {}, IFirmeAlloggio>
& IFirmeAlloggio;

export { IFirmeAlloggio };