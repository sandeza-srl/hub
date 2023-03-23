import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICodiciCatastaliPrivate } from './CodiciCatastali.Types.Private';


/* --------
* Schema Definition
* -------- */
const CodiciCatastaliSchema = new mongoose.Schema<ICodiciCatastaliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodiceCatastale',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdNazione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'Comune',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdCodiceCatastale',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CodiciCatastaliSchema;