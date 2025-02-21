import * as mongoose from 'mongoose';

import TraduzioniTipiProtocolliSchema from './TraduzioniTipiProtocolli.Schema';
import type { ITraduzioniTipiProtocolli } from './TraduzioniTipiProtocolli.Types';


/* --------
* Model Definition
* -------- */
const TraduzioniTipiProtocolli = mongoose.model<ITraduzioniTipiProtocolli>(
'TraduzioniTipiProtocolli',
TraduzioniTipiProtocolliSchema as any
) as mongoose.Model<ITraduzioniTipiProtocolli>;

/* --------
* Module Exports
* -------- */
export default TraduzioniTipiProtocolli;

export { TraduzioniTipiProtocolliSchema };

export type TTraduzioniTipiProtocolliModel = Omit<typeof TraduzioniTipiProtocolli, 'traslateAliases'> & {
translateAliases(raw: Partial<ITraduzioniTipiProtocolli>): any
};

export type TTraduzioniTipiProtocolliDocument = 
& mongoose.Document<any, {}, ITraduzioniTipiProtocolli>
& ITraduzioniTipiProtocolli;

export { ITraduzioniTipiProtocolli };