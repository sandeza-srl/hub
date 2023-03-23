import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IUpdateCostiArticoliPrivate } from './UpdateCostiArticoli.Types.Private';


/* --------
* Schema Definition
* -------- */
const UpdateCostiArticoliSchema = new mongoose.Schema<IUpdateCostiArticoliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdUpdateCostiArticoli',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtUtenteModifica',

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
  __Dati_Numero001: {
    type: Number,
    alias: 'NumRisorse',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagAperta',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagInCorso',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagChiusa',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtStatoUpdate',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataEsecuzione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagGestioneVariazioni',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagAggiornaDaVoci',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'AnnoEsecuzione',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'AnnoMeseEsecuzione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdUtenteCreazione',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdUtenteModifica',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraInizioEsecuzione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraFineEsecuzione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagElaborazioneInCorso',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdRicorrenzaRecord',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtUtente',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default UpdateCostiArticoliSchema;