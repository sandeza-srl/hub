import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICriticitaArticoloPrivate } from './CriticitaArticolo.Types.Private';


/* --------
* Schema Definition
* -------- */
const CriticitaArticoloSchema = new mongoose.Schema<ICriticitaArticoloPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdCriticitaArticolo',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtCriticitaArticolo',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdUtenteCreazione',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'Note',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'CodiceCriticitaArticolo',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'FlagSelezione',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdRicorrenzaRecord',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CriticitaArticoloSchema;