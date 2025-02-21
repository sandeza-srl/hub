import * as mongoose from 'mongoose';

import InstallazioneSchema from './Installazione.Schema';
import type { IInstallazione } from './Installazione.Types';


/* --------
* Model Definition
* -------- */
const Installazione = mongoose.model<IInstallazione>(
'Installazione',
InstallazioneSchema as any
) as mongoose.Model<IInstallazione>;

/* --------
* Module Exports
* -------- */
export default Installazione;

export { InstallazioneSchema };

export type TInstallazioneModel = Omit<typeof Installazione, 'traslateAliases'> & {
translateAliases(raw: Partial<IInstallazione>): any
};

export type TInstallazioneDocument = 
& mongoose.Document<any, {}, IInstallazione>
& IInstallazione;

export { IInstallazione };