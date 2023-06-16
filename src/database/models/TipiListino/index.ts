import * as mongoose from 'mongoose';

import TipiListinoSchema from './TipiListino.Schema';
import type { ITipiListino } from './TipiListino.Types';


/* --------
* Model Definition
* -------- */
const TipiListino = mongoose.model<ITipiListino>(
  'TipiListino',
  TipiListinoSchema as any
) as mongoose.Model<ITipiListino>;

/* --------
* Module Exports
* -------- */
export default TipiListino;

export { TipiListinoSchema };

export type TTipiListinoModel = Omit<typeof TipiListino, 'traslateAliases'> & {
  translateAliases(raw: Partial<ITipiListino>): any
};

export type TTipiListinoDocument =
  & mongoose.Document<any, {}, ITipiListino>
  & ITipiListino;

export { ITipiListino };
