import * as mongoose from 'mongoose';

import VociTipiPianiCampionamentoSchema from './VociTipiPianiCampionamento.Schema';
import type { IVociTipiPianiCampionamento } from './VociTipiPianiCampionamento.Types';


/* --------
* Model Definition
* -------- */
const VociTipiPianiCampionamento = mongoose.model<IVociTipiPianiCampionamento>(
  'VociTipiPianiCampionamento',
  VociTipiPianiCampionamentoSchema as any
) as mongoose.Model<IVociTipiPianiCampionamento>;

/* --------
* Module Exports
* -------- */
export default VociTipiPianiCampionamento;

export { VociTipiPianiCampionamentoSchema };

export type TVociTipiPianiCampionamentoModel = Omit<typeof VociTipiPianiCampionamento, 'traslateAliases'> & {
  translateAliases(raw: Partial<IVociTipiPianiCampionamento>): any
};

export type TVociTipiPianiCampionamentoDocument = 
& mongoose.Document<any, {}, IVociTipiPianiCampionamento>
& IVociTipiPianiCampionamento;

export { IVociTipiPianiCampionamento };