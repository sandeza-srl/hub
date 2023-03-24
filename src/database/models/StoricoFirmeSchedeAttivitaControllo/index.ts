import * as mongoose from 'mongoose';

import StoricoFirmeSchedeAttivitaControlloSchema from './StoricoFirmeSchedeAttivitaControllo.Schema';
import type { IStoricoFirmeSchedeAttivitaControllo } from './StoricoFirmeSchedeAttivitaControllo.Types';


/* --------
* Model Definition
* -------- */
const StoricoFirmeSchedeAttivitaControllo = mongoose.model<IStoricoFirmeSchedeAttivitaControllo>(
  'StoricoFirmeSchedeAttivitaControllo',
  StoricoFirmeSchedeAttivitaControlloSchema as any
) as mongoose.Model<IStoricoFirmeSchedeAttivitaControllo>;

/* --------
* Module Exports
* -------- */
export default StoricoFirmeSchedeAttivitaControllo;

export { StoricoFirmeSchedeAttivitaControlloSchema };

export type TStoricoFirmeSchedeAttivitaControlloModel = typeof StoricoFirmeSchedeAttivitaControllo;

export type TStoricoFirmeSchedeAttivitaControlloDocument = 
& mongoose.Document<any, {}, IStoricoFirmeSchedeAttivitaControllo>
& IStoricoFirmeSchedeAttivitaControllo;

export { IStoricoFirmeSchedeAttivitaControllo };