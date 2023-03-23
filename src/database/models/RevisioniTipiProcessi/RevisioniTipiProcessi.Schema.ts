import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRevisioniTipiProcessiPrivate } from './RevisioniTipiProcessi.Types.Private';


/* --------
* Schema Definition
* -------- */
const RevisioniTipiProcessiSchema = new mongoose.Schema<IRevisioniTipiProcessiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataModifica',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
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
  __Dati_Data003: {
    type: Date,
    alias: 'DataRevisione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoProcesso',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdRevisioneTipoProcesso',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'Note',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'NumeroRevisione',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'UtenteCreazione',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'UtenteModifica',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdInstallazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RevisioniTipiProcessiSchema;