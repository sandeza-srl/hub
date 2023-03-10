import * as mongoose from 'mongoose';

import GiorniFestiviFerialiSchema from './GiorniFestiviFeriali.Schema';
import type { IGiorniFestiviFeriali } from './GiorniFestiviFeriali.Types';


/* --------
* Model Definition
* -------- */
const GiorniFestiviFeriali = mongoose.model<IGiorniFestiviFeriali>(
  'GiorniFestiviFeriali',
  GiorniFestiviFerialiSchema as any
) as mongoose.Model<IGiorniFestiviFeriali>;

/* --------
* Module Exports
* -------- */
export default GiorniFestiviFeriali;

export { GiorniFestiviFerialiSchema };

export type TGiorniFestiviFerialiModel = typeof GiorniFestiviFeriali;

export type TGiorniFestiviFerialiDocument = 
& mongoose.Document<any, {}, IGiorniFestiviFeriali>
& IGiorniFestiviFeriali;

export { IGiorniFestiviFeriali };