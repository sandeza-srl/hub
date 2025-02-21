import * as mongoose from 'mongoose';

import VociCalcoloFornitureSottofamiglieItemsSchema from './VociCalcoloFornitureSottofamiglieItems.Schema';
import type { IVociCalcoloFornitureSottofamiglieItems } from './VociCalcoloFornitureSottofamiglieItems.Types';


/* --------
* Model Definition
* -------- */
const VociCalcoloFornitureSottofamiglieItems = mongoose.model<IVociCalcoloFornitureSottofamiglieItems>(
'VociCalcoloFornitureSottofamiglieItems',
VociCalcoloFornitureSottofamiglieItemsSchema as any
) as mongoose.Model<IVociCalcoloFornitureSottofamiglieItems>;

/* --------
* Module Exports
* -------- */
export default VociCalcoloFornitureSottofamiglieItems;

export { VociCalcoloFornitureSottofamiglieItemsSchema };

export type TVociCalcoloFornitureSottofamiglieItemsModel = Omit<typeof VociCalcoloFornitureSottofamiglieItems, 'traslateAliases'> & {
translateAliases(raw: Partial<IVociCalcoloFornitureSottofamiglieItems>): any
};

export type TVociCalcoloFornitureSottofamiglieItemsDocument = 
& mongoose.Document<any, {}, IVociCalcoloFornitureSottofamiglieItems>
& IVociCalcoloFornitureSottofamiglieItems;

export { IVociCalcoloFornitureSottofamiglieItems };