import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IEstrazioneContattiPrivate } from './EstrazioneContatti.Types.Private';


/* --------
* Schema Definition
* -------- */
const EstrazioneContattiSchema = new mongoose.Schema<IEstrazioneContattiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdEstrazioneContatti',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtEstrazioneContatti',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Descrizione',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataModifica',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Ora001: {
    type: String,
    alias: 'OraModifica',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'NumeroRecordTrovati',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtUtenteModifica',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'Tipo',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default EstrazioneContattiSchema;