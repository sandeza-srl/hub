import * as mongoose from 'mongoose';

import RichiesteHelp_TagSchema from './RichiesteHelp_Tag.Schema';
import type { IRichiesteHelp_Tag } from './RichiesteHelp_Tag.Types';


/* --------
* Model Definition
* -------- */
const RichiesteHelp_Tag = mongoose.model<IRichiesteHelp_Tag>(
  'RichiesteHelp_Tag',
  RichiesteHelp_TagSchema as any
) as mongoose.Model<IRichiesteHelp_Tag>;

/* --------
* Module Exports
* -------- */
export default RichiesteHelp_Tag;

export { RichiesteHelp_TagSchema };

export type TRichiesteHelp_TagModel = Omit<typeof RichiesteHelp_Tag, 'traslateAliases'> & {
  translateAliases(raw: Partial<IRichiesteHelp_Tag>): any
};

export type TRichiesteHelp_TagDocument = 
& mongoose.Document<any, {}, IRichiesteHelp_Tag>
& IRichiesteHelp_Tag;

export { IRichiesteHelp_Tag };