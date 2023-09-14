import * as mongoose from 'mongoose';

import TipiAttivitaStatoSchema from './TipiAttivitaStato.Schema';
import type { ITipiAttivitaStato } from './TipiAttivitaStato.Types';


/* --------
* Model Definition
* -------- */
const TipiAttivitaStato = mongoose.model<ITipiAttivitaStato>(
  'TipiAttivitaStato',
  TipiAttivitaStatoSchema as any
) as mongoose.Model<ITipiAttivitaStato>;

/* --------
* Module Exports
* -------- */
export default TipiAttivitaStato;

export { TipiAttivitaStatoSchema };

export type TTipiAttivitaStatoModel = Omit<typeof TipiAttivitaStato, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiAttivitaStato>): any
};

export type TTipiAttivitaStatoDocument = 
& mongoose.Document<any, {}, ITipiAttivitaStato>
& ITipiAttivitaStato;

export { ITipiAttivitaStato };