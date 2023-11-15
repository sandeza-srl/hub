import * as mongoose from 'mongoose';

import NumeriSerieLottoProduzioneSchema from './NumeriSerieLottoProduzione.Schema';
import type { INumeriSerieLottoProduzione } from './NumeriSerieLottoProduzione.Types';


/* --------
* Model Definition
* -------- */
const NumeriSerieLottoProduzione = mongoose.model<INumeriSerieLottoProduzione>(
  'NumeriSerieLottoProduzione',
  NumeriSerieLottoProduzioneSchema as any
) as mongoose.Model<INumeriSerieLottoProduzione>;

/* --------
* Module Exports
* -------- */
export default NumeriSerieLottoProduzione;

export { NumeriSerieLottoProduzioneSchema };

export type TNumeriSerieLottoProduzioneModel = Omit<typeof NumeriSerieLottoProduzione, 'traslateAliases'> & {
  translateAliases(raw: Partial<INumeriSerieLottoProduzione>): any
};

export type TNumeriSerieLottoProduzioneDocument = 
& mongoose.Document<any, {}, INumeriSerieLottoProduzione>
& INumeriSerieLottoProduzione;

export { INumeriSerieLottoProduzione };