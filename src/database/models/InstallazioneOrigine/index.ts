import * as mongoose from 'mongoose';

import InstallazioneOrigineSchema from './InstallazioneOrigine.Schema';
import type { IInstallazioneOrigine } from './InstallazioneOrigine.Types';


/* --------
* Model Definition
* -------- */
const InstallazioneOrigine = mongoose.model<IInstallazioneOrigine>(
'InstallazioneOrigine',
InstallazioneOrigineSchema as any
) as mongoose.Model<IInstallazioneOrigine>;

/* --------
* Module Exports
* -------- */
export default InstallazioneOrigine;

export { InstallazioneOrigineSchema };

export type TInstallazioneOrigineModel = Omit<typeof InstallazioneOrigine, 'traslateAliases'> & {
translateAliases(raw: Partial<IInstallazioneOrigine>): any
};

export type TInstallazioneOrigineDocument = 
& mongoose.Document<any, {}, IInstallazioneOrigine>
& IInstallazioneOrigine;

export { IInstallazioneOrigine };