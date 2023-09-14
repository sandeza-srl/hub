import * as mongoose from 'mongoose';

import AccessiWebSchema from './AccessiWeb.Schema';
import type { IAccessiWeb } from './AccessiWeb.Types';


/* --------
* Model Definition
* -------- */
const AccessiWeb = mongoose.model<IAccessiWeb>(
  'AccessiWeb',
  AccessiWebSchema as any
) as mongoose.Model<IAccessiWeb>;

/* --------
* Module Exports
* -------- */
export default AccessiWeb;

export { AccessiWebSchema };

export type TAccessiWebModel = Omit<typeof AccessiWeb, 'traslateAliases'> & {
  translateAliases(raw: Partial<IAccessiWeb>): any
};

export type TAccessiWebDocument = 
& mongoose.Document<any, {}, IAccessiWeb>
& IAccessiWeb;

export { IAccessiWeb };