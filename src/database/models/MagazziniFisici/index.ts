import * as mongoose from 'mongoose';

import MagazziniFisiciSchema from './MagazziniFisici.Schema';
import type { IMagazziniFisici } from './MagazziniFisici.Types';


/* --------
* Model Definition
* -------- */
const MagazziniFisici = mongoose.model<IMagazziniFisici>(
  'MagazziniFisici',
  MagazziniFisiciSchema as any
) as mongoose.Model<IMagazziniFisici>;

/* --------
* Module Exports
* -------- */
export default MagazziniFisici;

export { MagazziniFisiciSchema };

export type TMagazziniFisiciModel = Omit<typeof MagazziniFisici, 'traslateAliases'> & {
  translateAliases(raw: Partial<IMagazziniFisici>): any
};

export type TMagazziniFisiciDocument = 
& mongoose.Document<any, {}, IMagazziniFisici>
& IMagazziniFisici;

export { IMagazziniFisici };