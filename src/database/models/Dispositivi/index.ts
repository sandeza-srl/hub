import * as mongoose from 'mongoose';

import DispositiviSchema from './Dispositivi.Schema';
import type { IDispositivi } from './Dispositivi.Types';


/* --------
* Model Definition
* -------- */
const Dispositivi = mongoose.model<IDispositivi>(
  'Dispositivi',
  DispositiviSchema as any
) as mongoose.Model<IDispositivi>;

/* --------
* Module Exports
* -------- */
export default Dispositivi;

export { DispositiviSchema };

export type TDispositiviModel = Omit<typeof Dispositivi, 'traslateAliases'> & {
  translateAliases(raw: Partial<IDispositivi>): any
};

export type TDispositiviDocument = 
& mongoose.Document<any, {}, IDispositivi>
& IDispositivi;

export { IDispositivi };