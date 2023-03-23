import * as mongoose from 'mongoose';

import UtentiValidazioneTipiSchema from './UtentiValidazioneTipi.Schema';
import type { IUtentiValidazioneTipi } from './UtentiValidazioneTipi.Types';


/* --------
* Model Definition
* -------- */
const UtentiValidazioneTipi = mongoose.model<IUtentiValidazioneTipi>(
  'UtentiValidazioneTipi',
  UtentiValidazioneTipiSchema as any
) as mongoose.Model<IUtentiValidazioneTipi>;

/* --------
* Module Exports
* -------- */
export default UtentiValidazioneTipi;

export { UtentiValidazioneTipiSchema };

export type TUtentiValidazioneTipiModel = typeof UtentiValidazioneTipi;

export type TUtentiValidazioneTipiDocument = 
& mongoose.Document<any, {}, IUtentiValidazioneTipi>
& IUtentiValidazioneTipi;

export { IUtentiValidazioneTipi };