import * as mongoose from 'mongoose';

import DispositiviRaccoltaDatiSchema from './DispositiviRaccoltaDati.Schema';
import type { IDispositiviRaccoltaDati } from './DispositiviRaccoltaDati.Types';


/* --------
* Model Definition
* -------- */
const DispositiviRaccoltaDati = mongoose.model<IDispositiviRaccoltaDati>(
'DispositiviRaccoltaDati',
DispositiviRaccoltaDatiSchema as any
) as mongoose.Model<IDispositiviRaccoltaDati>;

/* --------
* Module Exports
* -------- */
export default DispositiviRaccoltaDati;

export { DispositiviRaccoltaDatiSchema };

export type TDispositiviRaccoltaDatiModel = Omit<typeof DispositiviRaccoltaDati, 'traslateAliases'> & {
translateAliases(raw: Partial<IDispositiviRaccoltaDati>): any
};

export type TDispositiviRaccoltaDatiDocument = 
& mongoose.Document<any, {}, IDispositiviRaccoltaDati>
& IDispositiviRaccoltaDati;

export { IDispositiviRaccoltaDati };