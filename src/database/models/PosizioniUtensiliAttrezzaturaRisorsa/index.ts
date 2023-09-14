import * as mongoose from 'mongoose';

import PosizioniUtensiliAttrezzaturaRisorsaSchema from './PosizioniUtensiliAttrezzaturaRisorsa.Schema';
import type { IPosizioniUtensiliAttrezzaturaRisorsa } from './PosizioniUtensiliAttrezzaturaRisorsa.Types';


/* --------
* Model Definition
* -------- */
const PosizioniUtensiliAttrezzaturaRisorsa = mongoose.model<IPosizioniUtensiliAttrezzaturaRisorsa>(
  'PosizioniUtensiliAttrezzaturaRisorsa',
  PosizioniUtensiliAttrezzaturaRisorsaSchema as any
) as mongoose.Model<IPosizioniUtensiliAttrezzaturaRisorsa>;

/* --------
* Module Exports
* -------- */
export default PosizioniUtensiliAttrezzaturaRisorsa;

export { PosizioniUtensiliAttrezzaturaRisorsaSchema };

export type TPosizioniUtensiliAttrezzaturaRisorsaModel = Omit<typeof PosizioniUtensiliAttrezzaturaRisorsa, 'traslateAliases'> & {
  translateAliases(raw: Partial<IPosizioniUtensiliAttrezzaturaRisorsa>): any
};

export type TPosizioniUtensiliAttrezzaturaRisorsaDocument = 
& mongoose.Document<any, {}, IPosizioniUtensiliAttrezzaturaRisorsa>
& IPosizioniUtensiliAttrezzaturaRisorsa;

export { IPosizioniUtensiliAttrezzaturaRisorsa };