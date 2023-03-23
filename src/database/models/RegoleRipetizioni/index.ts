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

export type TRegoleRipetizioniModel = typeof RegoleRipetizioni;

export type TRegoleRipetizioniDocument = 
& mongoose.Document<any, {}, IRegoleRipetizioni>
& IRegoleRipetizioni;

export { IRegoleRipetizioni };