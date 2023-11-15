import * as mongoose from 'mongoose';

import TipiPianiCampionamentoSchema from './TipiPianiCampionamento.Schema';
import type { ITipiPianiCampionamento } from './TipiPianiCampionamento.Types';


/* --------
* Model Definition
* -------- */
const TipiPianiCampionamento = mongoose.model<ITipiPianiCampionamento>(
  'TipiPianiCampionamento',
  TipiPianiCampionamentoSchema as any
) as mongoose.Model<ITipiPianiCampionamento>;

/* --------
* Module Exports
* -------- */
export default TipiPianiCampionamento;

export { TipiPianiCampionamentoSchema };

export type TTipiPianiCampionamentoModel = Omit<typeof TipiPianiCampionamento, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiPianiCampionamento>): any
};

export type TTipiPianiCampionamentoDocument = 
& mongoose.Document<any, {}, ITipiPianiCampionamento>
& ITipiPianiCampionamento;

export { ITipiPianiCampionamento };