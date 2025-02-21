import * as mongoose from 'mongoose';

import FileZProductionSchema from './FileZProduction.Schema';
import type { IFileZProduction } from './FileZProduction.Types';


/* --------
* Model Definition
* -------- */
const FileZProduction = mongoose.model<IFileZProduction>(
'FileZProduction',
FileZProductionSchema as any
) as mongoose.Model<IFileZProduction>;

/* --------
* Module Exports
* -------- */
export default FileZProduction;

export { FileZProductionSchema };

export type TFileZProductionModel = Omit<typeof FileZProduction, 'traslateAliases'> & {
translateAliases(raw: Partial<IFileZProduction>): any
};

export type TFileZProductionDocument = 
& mongoose.Document<any, {}, IFileZProduction>
& IFileZProduction;

export { IFileZProduction };