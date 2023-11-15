import * as mongoose from 'mongoose';

import VociRegoleRipetizioniSchema from './VociRegoleRipetizioni.Schema';
import type { IVociRegoleRipetizioni } from './VociRegoleRipetizioni.Types';


/* --------
* Model Definition
* -------- */
const VociRegoleRipetizioni = mongoose.model<IVociRegoleRipetizioni>(
  'VociRegoleRipetizioni',
  VociRegoleRipetizioniSchema as any
) as mongoose.Model<IVociRegoleRipetizioni>;

/* --------
* Module Exports
* -------- */
export default VociRegoleRipetizioni;

export { VociRegoleRipetizioniSchema };

export type TVociRegoleRipetizioniModel = Omit<typeof VociRegoleRipetizioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IVociRegoleRipetizioni>): any
};

export type TVociRegoleRipetizioniDocument = 
& mongoose.Document<any, {}, IVociRegoleRipetizioni>
& IVociRegoleRipetizioni;

export { IVociRegoleRipetizioni };