import * as mongoose from 'mongoose';

import UtenteSottoMenuSchema from './UtenteSottoMenu.Schema';
import type { IUtenteSottoMenu } from './UtenteSottoMenu.Types';


/* --------
* Model Definition
* -------- */
const UtenteSottoMenu = mongoose.model<IUtenteSottoMenu>(
'UtenteSottoMenu',
UtenteSottoMenuSchema as any
) as mongoose.Model<IUtenteSottoMenu>;

/* --------
* Module Exports
* -------- */
export default UtenteSottoMenu;

export { UtenteSottoMenuSchema };

export type TUtenteSottoMenuModel = Omit<typeof UtenteSottoMenu, 'traslateAliases'> & {
translateAliases(raw: Partial<IUtenteSottoMenu>): any
};

export type TUtenteSottoMenuDocument = 
& mongoose.Document<any, {}, IUtenteSottoMenu>
& IUtenteSottoMenu;

export { IUtenteSottoMenu };