import * as mongoose from 'mongoose';

import RichiesteHelpSchema from './RichiesteHelp.Schema';
import type { IRichiesteHelp } from './RichiesteHelp.Types';


/* --------
* Model Definition
* -------- */
const RichiesteHelp = mongoose.model<IRichiesteHelp>(
  'RichiesteHelp',
  RichiesteHelpSchema as any
) as mongoose.Model<IRichiesteHelp>;

/* --------
* Module Exports
* -------- */
export default RichiesteHelp;

export { RichiesteHelpSchema };

export type TRichiesteHelpModel = Omit<typeof RichiesteHelp, 'traslateAliases'> & {
  translateAliases(raw: Partial<IRichiesteHelp>): any
};

export type TRichiesteHelpDocument = 
& mongoose.Document<any, {}, IRichiesteHelp>
& IRichiesteHelp;

export { IRichiesteHelp };