import * as mongoose from 'mongoose';

import ChatSchema from './Chat.Schema';
import type { IChat } from './Chat.Types';


/* --------
* Model Definition
* -------- */
const Chat = mongoose.model<IChat>(
  'Chat',
  ChatSchema as any
) as mongoose.Model<IChat>;

/* --------
* Module Exports
* -------- */
export default Chat;

export { ChatSchema };

export type TChatModel = Omit<typeof Chat, 'traslateAliases'> & {
  translateAliases(raw: Partial<IChat>): any
};

export type TChatDocument = 
& mongoose.Document<any, {}, IChat>
& IChat;

export { IChat };