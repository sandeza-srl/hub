import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInfoAggiuntiveTipoContenitorePrivate } from './InfoAggiuntiveTipoContenitore.Types.Private';


/* --------
* Schema Definition
* -------- */
const InfoAggiuntiveTipoContenitoreSchema = new mongoose.Schema<IInfoAggiuntiveTipoContenitorePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },

}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveTipoContenitoreSchema;