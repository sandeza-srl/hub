import * as mongoose from 'mongoose';

import ElementiCostoRisorsaSchema from './ElementiCostoRisorsa.Schema';
import type { IElementiCostoRisorsa } from './ElementiCostoRisorsa.Types';


/* --------
* Model Definition
* -------- */
const ElementiCostoRisorsa = mongoose.model<IElementiCostoRisorsa>(
  'ElementiCostoRisorsa',
  ElementiCostoRisorsaSchema as any
) as mongoose.Model<IElementiCostoRisorsa>;

/* --------
* Module Exports
* -------- */
export default ElementiCostoRisorsa;

export { ElementiCostoRisorsaSchema };

export type TElementiCostoRisorsaModel = Omit<typeof ElementiCostoRisorsa, 'traslateAliases'> & {
  translateAliases(raw: Partial<IElementiCostoRisorsa>): any
};

export type TElementiCostoRisorsaDocument = 
& mongoose.Document<any, {}, IElementiCostoRisorsa>
& IElementiCostoRisorsa;

export { IElementiCostoRisorsa };