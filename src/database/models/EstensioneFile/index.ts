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

export type TEstensioneFileModel = Omit<typeof EstensioneFile, 'traslateAliases'> & {
  translateAliases(raw: Partial<IEstensioneFile>): any
};

export type TEstensioneFileDocument = 
& mongoose.Document<any, {}, IEstensioneFile>
& IEstensioneFile;

export { IEstensioneFile };