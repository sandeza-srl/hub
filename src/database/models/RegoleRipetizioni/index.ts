import * as mongoose from 'mongoose';

import RegoleRipetizioniSchema from './RegoleRipetizioni.Schema';
import type { IRegoleRipetizioni } from './RegoleRipetizioni.Types';


/* --------
* Model Definition
* -------- */
const RegoleRipetizioni = mongoose.model<IRegoleRipetizioni>(
  'RegoleRipetizioni',
  RegoleRipetizioniSchema as any
) as mongoose.Model<IRegoleRipetizioni>;

/* --------
* Module Exports
* -------- */
export default RegoleRipetizioni;

export { RegoleRipetizioniSchema };

export type TRegoleRipetizioniModel = Omit<typeof RegoleRipetizioni, 'traslateAliases'> & {
  translateAliases(raw: Partial<IRegoleRipetizioni>): any
};

export type TRegoleRipetizioniDocument = 
& mongoose.Document<any, {}, IRegoleRipetizioni>
& IRegoleRipetizioni;

export { IRegoleRipetizioni };