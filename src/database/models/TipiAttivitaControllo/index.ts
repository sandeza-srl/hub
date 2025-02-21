import * as mongoose from 'mongoose';

import TipiAttivitaControlloSchema from './TipiAttivitaControllo.Schema';
import type { ITipiAttivitaControllo } from './TipiAttivitaControllo.Types';


/* --------
* Model Definition
* -------- */
const TipiAttivitaControllo = mongoose.model<ITipiAttivitaControllo>(
'TipiAttivitaControllo',
TipiAttivitaControlloSchema as any
) as mongoose.Model<ITipiAttivitaControllo>;

/* --------
* Module Exports
* -------- */
export default TipiAttivitaControllo;

export { TipiAttivitaControlloSchema };

export type TTipiAttivitaControlloModel = Omit<typeof TipiAttivitaControllo, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiAttivitaControllo>): any
};

export type TTipiAttivitaControlloDocument = 
& mongoose.Document<any, {}, ITipiAttivitaControllo>
& ITipiAttivitaControllo;

export { ITipiAttivitaControllo };