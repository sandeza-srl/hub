import * as mongoose from 'mongoose';

import EstensioneFileSchema from './EstensioneFile.Schema';
import type { IEstensioneFile } from './EstensioneFile.Types';


/* --------
* Model Definition
* -------- */
const EstensioneFile = mongoose.model<IEstensioneFile>(
  'EstensioneFile',
  EstensioneFileSchema as any
) as mongoose.Model<IEstensioneFile>;

/* --------
* Module Exports
* -------- */
export default EstensioneFile;

export { EstensioneFileSchema };

export type TEstensioneFileModel = typeof EstensioneFile;

export type TEstensioneFileDocument = 
& mongoose.Document<any, {}, IEstensioneFile>
& IEstensioneFile;

export { IEstensioneFile };