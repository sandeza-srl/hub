import * as mongoose from 'mongoose';

import InfoTecnicheOpzioneProdSchema from './InfoTecnicheOpzioneProd.Schema';
import type { IInfoTecnicheOpzioneProd } from './InfoTecnicheOpzioneProd.Types';


/* --------
* Model Definition
* -------- */
const InfoTecnicheOpzioneProd = mongoose.model<IInfoTecnicheOpzioneProd>(
  'InfoTecnicheOpzioneProd',
  InfoTecnicheOpzioneProdSchema as any
) as mongoose.Model<IInfoTecnicheOpzioneProd>;

/* --------
* Module Exports
* -------- */
export default InfoTecnicheOpzioneProd;

export { InfoTecnicheOpzioneProdSchema };

export type TInfoTecnicheOpzioneProdModel = typeof InfoTecnicheOpzioneProd;

export type TInfoTecnicheOpzioneProdDocument = 
& mongoose.Document<any, {}, IInfoTecnicheOpzioneProd>
& IInfoTecnicheOpzioneProd;

export { IInfoTecnicheOpzioneProd };