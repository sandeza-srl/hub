import * as mongoose from 'mongoose';

import UpdateCosti_VariazioniLottiSchema from './UpdateCosti_VariazioniLotti.Schema';
import type { IUpdateCosti_VariazioniLotti } from './UpdateCosti_VariazioniLotti.Types';


/* --------
* Model Definition
* -------- */
const UpdateCosti_VariazioniLotti = mongoose.model<IUpdateCosti_VariazioniLotti>(
  'UpdateCosti_VariazioniLotti',
  UpdateCosti_VariazioniLottiSchema as any
) as mongoose.Model<IUpdateCosti_VariazioniLotti>;

/* --------
* Module Exports
* -------- */
export default UpdateCosti_VariazioniLotti;

export { UpdateCosti_VariazioniLottiSchema };

export type TUpdateCosti_VariazioniLottiModel = Omit<typeof UpdateCosti_VariazioniLotti, 'traslateAliases'> & {
  translateAliases(raw: Partial<IUpdateCosti_VariazioniLotti>): any
};

export type TUpdateCosti_VariazioniLottiDocument = 
& mongoose.Document<any, {}, IUpdateCosti_VariazioniLotti>
& IUpdateCosti_VariazioniLotti;

export { IUpdateCosti_VariazioniLotti };