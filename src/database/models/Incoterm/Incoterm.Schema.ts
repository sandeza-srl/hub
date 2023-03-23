import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IIncotermPrivate } from './Incoterm.Types.Private';


/* --------
* Schema Definition
* -------- */
const IncotermSchema = new mongoose.Schema<IIncotermPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodiceIncoterm',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdIncoterm',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtIncoterm',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceTxtIncoterm',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default IncotermSchema;