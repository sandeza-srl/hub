import * as mongoose from 'mongoose';

import TipiScartiProduzioneSchema from './TipiScartiProduzione.Schema';
import type { ITipiScartiProduzione } from './TipiScartiProduzione.Types';


/* --------
* Model Definition
* -------- */
const TipiScartiProduzione = mongoose.model<ITipiScartiProduzione>(
'TipiScartiProduzione',
TipiScartiProduzioneSchema as any
) as mongoose.Model<ITipiScartiProduzione>;

/* --------
* Module Exports
* -------- */
export default TipiScartiProduzione;

export { TipiScartiProduzioneSchema };

export type TTipiScartiProduzioneModel = Omit<typeof TipiScartiProduzione, 'traslateAliases'> & {
translateAliases(raw: Partial<ITipiScartiProduzione>): any
};

export type TTipiScartiProduzioneDocument = 
& mongoose.Document<any, {}, ITipiScartiProduzione>
& ITipiScartiProduzione;

export { ITipiScartiProduzione };