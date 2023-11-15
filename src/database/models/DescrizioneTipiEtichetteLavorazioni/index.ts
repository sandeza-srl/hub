import * as mongoose from 'mongoose';

import DescrizioneTipiEtichetteLavorazioniSchema from './DescrizioneTipiEtichetteLavorazioni.Schema';
import type { IDescrizioneTipiEtichetteLavorazioni } from './DescrizioneTipiEtichetteLavorazioni.Types';


/* --------
* Model Definition
* -------- */
const DescrizioneTipiEtichetteLavorazioni = mongoose.model<IDescrizioneTipiEtichetteLavorazioni>(
  'DescrizioneTipiEtichetteLavorazioni',
  DescrizioneTipiEtichetteLavorazioniSchema as any
) as mongoose.Model<IDescrizioneTipiEtichetteLavorazioni>;

/* --------
* Module Exports
* -------- */
export default DescrizioneTipiEtichetteLavorazioni;

export { DescrizioneTipiEtichetteLavorazioniSchema };

export type TDescrizioneTipiEtichetteLavorazioniModel = Omit<typeof DescrizioneTipiEtichetteLavorazioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IDescrizioneTipiEtichetteLavorazioni>): any
};

export type TDescrizioneTipiEtichetteLavorazioniDocument = 
& mongoose.Document<any, {}, IDescrizioneTipiEtichetteLavorazioni>
& IDescrizioneTipiEtichetteLavorazioni;

export { IDescrizioneTipiEtichetteLavorazioni };