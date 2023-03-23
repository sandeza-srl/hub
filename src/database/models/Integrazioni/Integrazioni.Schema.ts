import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IIntegrazioniPrivate } from './Integrazioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const IntegrazioniSchema = new mongoose.Schema<IIntegrazioniPrivate>({

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
export default IntegrazioniSchema;