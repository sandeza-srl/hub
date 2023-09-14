import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICalTempPrivate } from './CalTemp.Types.Private';


/* --------
* Schema Definition
* -------- */
const CalTempSchema = new mongoose.Schema<ICalTempPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOra',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdLuogo',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdCalTempo',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CalTempSchema;