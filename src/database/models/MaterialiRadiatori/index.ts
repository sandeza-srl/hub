import * as mongoose from 'mongoose';

import MaterialiRadiatoriSchema from './MaterialiRadiatori.Schema';
import type { IMaterialiRadiatori } from './MaterialiRadiatori.Types';


/* --------
* Model Definition
* -------- */
const MaterialiRadiatori = mongoose.model<IMaterialiRadiatori>(
  'MaterialiRadiatori',
  MaterialiRadiatoriSchema as any
) as mongoose.Model<IMaterialiRadiatori>;

/* --------
* Module Exports
* -------- */
export default MaterialiRadiatori;

export { MaterialiRadiatoriSchema };

export type TMaterialiRadiatoriModel = Omit<typeof MaterialiRadiatori, 'traslateAliases'> & {
  translateAliases(raw: Partial<IMaterialiRadiatori>): any
};

export type TMaterialiRadiatoriDocument = 
& mongoose.Document<any, {}, IMaterialiRadiatori>
& IMaterialiRadiatori;

export { IMaterialiRadiatori };