import * as mongoose from 'mongoose';

import TipologieDestinatariMailSchema from './TipologieDestinatariMail.Schema';
import type { ITipologieDestinatariMail } from './TipologieDestinatariMail.Types';


/* --------
* Model Definition
* -------- */
const TipologieDestinatariMail = mongoose.model<ITipologieDestinatariMail>(
  'TipologieDestinatariMail',
  TipologieDestinatariMailSchema as any
) as mongoose.Model<ITipologieDestinatariMail>;

/* --------
* Module Exports
* -------- */
export default TipologieDestinatariMail;

export { TipologieDestinatariMailSchema };

export type TTipologieDestinatariMailModel = typeof TipologieDestinatariMail;

export type TTipologieDestinatariMailDocument = 
& mongoose.Document<any, {}, ITipologieDestinatariMail>
& ITipologieDestinatariMail;

export { ITipologieDestinatariMail };