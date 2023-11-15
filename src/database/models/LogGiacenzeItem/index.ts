import * as mongoose from 'mongoose';

import LogGiacenzeItemSchema from './LogGiacenzeItem.Schema';
import type { ILogGiacenzeItem } from './LogGiacenzeItem.Types';


/* --------
* Model Definition
* -------- */
const LogGiacenzeItem = mongoose.model<ILogGiacenzeItem>(
  'LogGiacenzeItem',
  LogGiacenzeItemSchema as any
) as mongoose.Model<ILogGiacenzeItem>;

/* --------
* Module Exports
* -------- */
export default LogGiacenzeItem;

export { LogGiacenzeItemSchema };

export type TLogGiacenzeItemModel = Omit<typeof LogGiacenzeItem, 'traslateAliases'> & {
  translateAliases(raw: Partial<ILogGiacenzeItem>): any
};

export type TLogGiacenzeItemDocument = 
& mongoose.Document<any, {}, ILogGiacenzeItem>
& ILogGiacenzeItem;

export { ILogGiacenzeItem };