import * as mongoose from 'mongoose';

import NotificheStepProcessoSchema from './NotificheStepProcesso.Schema';
import type { INotificheStepProcesso } from './NotificheStepProcesso.Types';


/* --------
* Model Definition
* -------- */
const NotificheStepProcesso = mongoose.model<INotificheStepProcesso>(
  'NotificheStepProcesso',
  NotificheStepProcessoSchema as any
) as mongoose.Model<INotificheStepProcesso>;

/* --------
* Module Exports
* -------- */
export default NotificheStepProcesso;

export { NotificheStepProcessoSchema };

export type TNotificheStepProcessoModel = Omit<typeof NotificheStepProcesso, 'traslateAliases'> & {
  translateAliases(raw: Partial<INotificheStepProcesso>): any
};

export type TNotificheStepProcessoDocument = 
& mongoose.Document<any, {}, INotificheStepProcesso>
& INotificheStepProcesso;

export { INotificheStepProcesso };