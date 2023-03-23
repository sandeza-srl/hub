import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICapPrivate } from './Cap.Types.Private';


/* --------
* Schema Definition
* -------- */
const CapSchema = new mongoose.Schema<ICapPrivate>({

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
    alias: 'Citta',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'Cap',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdNazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Comune',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtLiberoIndirizzo',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagMultiCap',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdCap',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CapSchema;